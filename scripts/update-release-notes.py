#!/usr/bin/env python3
"""
Update release notes file for a CalVer release.

Reads configuration from environment variables:
  TAG         — CalVer tag (e.g., v26.3.22)
  HASH        — Short commit hash
  DAY         — Day of month
  YEAR        — Two-digit year
  MONTH       — Month number
  NOTES       — Markdown release notes (bulleted list)
"""

import re
import os
from datetime import datetime

tag = os.environ["TAG"]
hash_val = os.environ["HASH"]
day = os.environ["DAY"]
year = os.environ["YEAR"]
month = os.environ["MONTH"]
notes = os.environ.get("NOTES", "- No release notes generated")

month_name = datetime.now().strftime("%B")
year_full = datetime.now().strftime("%Y")

file_path = f"src/content/docs/releases/{year}/{month}.md"
os.makedirs(os.path.dirname(file_path), exist_ok=True)

new_build_block = f"*Build: {hash_val}*\n{notes}\n"
new_day_section = f"## {tag}\n\n{new_build_block}\n"

if not os.path.exists(file_path):
    content = f"""---
title: "{month_name} {year_full}"
description: "Release notes for {month_name} {year_full}"
template: doc
sidebar:
  hidden: true
---

{new_day_section}"""
    with open(file_path, "w") as f:
        f.write(content)
else:
    with open(file_path, "r") as f:
        content = f.read()

    heading = f"## {tag}"

    if heading in content:
        # Same day, different build — insert new build block after heading
        pattern = f"({re.escape(heading)}\n\n)"
        replacement = f"\\1{new_build_block}\n"
        content = re.sub(pattern, replacement, content, count=1)
    else:
        # New day — prepend before first ## heading after frontmatter
        match = re.search(r"\n(## )", content)
        if match:
            pos = match.start() + 1
            content = content[:pos] + new_day_section + content[pos:]
        else:
            content += f"\n{new_day_section}"

    with open(file_path, "w") as f:
        f.write(content)

print(f"Updated {file_path}")
