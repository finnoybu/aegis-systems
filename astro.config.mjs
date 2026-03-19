// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://aegis-constitution.com',
  integrations: [
    starlight({
      title: 'AEGIS™ Constitution',
      description: 'The canonical AEGIS™ governance charter — versioned, citeable, and openly licensed',
      logo: {
        src: './src/assets/AEGIS_logo.svg',
      },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/aegis-initiative' },
      ],
      routeMiddleware: './src/routeData.ts',
      head: [
        {
          tag: 'script',
          content: `
            (function() {
              var keys = Object.keys(sessionStorage);
              keys.forEach(function(k) {
                if (k.startsWith('sl-sidebar-state')) sessionStorage.removeItem(k);
              });
            })();
          `,
        },
      ],
      sidebar: [
        {
          label: 'Constitution',
          collapsed: true,
          items: [
            { label: 'Preamble', slug: 'constitution' },
            { label: 'Art. I — Bounded Capability', slug: 'constitution/article-i' },
            { label: 'Art. II — Authority Binding', slug: 'constitution/article-ii' },
            { label: 'Art. III — Deterministic Enforcement', slug: 'constitution/article-iii' },
            { label: 'Art. IV — Human Oversight', slug: 'constitution/article-iv' },
            { label: 'Art. V — Information Sovereignty', slug: 'constitution/article-v' },
            { label: 'Art. VI — Governance Transparency', slug: 'constitution/article-vi' },
            { label: 'Art. VII — Auditability', slug: 'constitution/article-vii' },
            { label: 'Art. VIII — Collective Defense', slug: 'constitution/article-viii' },
            { label: 'Art. IX — Deny by Default', slug: 'constitution/article-ix' },
            { label: 'Art. X — Constitutional Supremacy', slug: 'constitution/article-x' },
            { label: 'Art. XI — Escalation Discipline', slug: 'constitution/article-xi' },
            { label: 'Constitutional Compliance', slug: 'constitution/compliance' },
            { label: 'Amendments', slug: 'constitution/amendments' },
            { label: 'Interpretation', slug: 'constitution/interpretation' },
          ],
        },
        {
          label: 'Doctrine',
          collapsed: true,
          items: [
            { label: 'Overview', slug: 'doctrine' },
            { label: 'Art. I — Constraint Before Capability', slug: 'doctrine/article-i' },
            { label: 'Art. II — Governance Before Execution', slug: 'doctrine/article-ii' },
            { label: 'Art. III — Transparency Before Trust', slug: 'doctrine/article-iii' },
            { label: 'Art. IV — Oversight Before Autonomy', slug: 'doctrine/article-iv' },
            { label: 'Art. V — Deny by Default', slug: 'doctrine/article-v' },
          ],
        },
        {
          label: 'Principles',
          collapsed: true,
          items: [
            { label: 'Overview', slug: 'principles' },
            { label: 'Prin. 1 — Bounded Execution', slug: 'principles/principle-1' },
            { label: 'Prin. 2 — Explicit Threat Classification', slug: 'principles/principle-2' },
            { label: 'Prin. 3 — Versioned Authority', slug: 'principles/principle-3' },
            { label: 'Prin. 4 — Deterministic Transitions', slug: 'principles/principle-4' },
            { label: 'Prin. 5 — Structured Persistence', slug: 'principles/principle-5' },
            { label: 'Prin. 6 — Audit as Completion Condition', slug: 'principles/principle-6' },
            { label: 'Prin. 7 — Separation of Layers', slug: 'principles/principle-7' },
            { label: 'Prin. 8 — Escalation Discipline', slug: 'principles/principle-8' },
          ],
        },
        {
          label: 'Protocols',
          collapsed: true,
          items: [
            { label: 'Overview', slug: 'protocols' },
            { label: 'Prot. 1 — State Dump', slug: 'protocols/protocol-1' },
            { label: 'Prot. 2 — Mode Transition', slug: 'protocols/protocol-2' },
            { label: 'Prot. 3 — Threat Escalation', slug: 'protocols/protocol-3' },
            { label: 'Prot. 4 — Constraint Declaration', slug: 'protocols/protocol-4' },
            { label: 'Prot. 5 — Authority Binding', slug: 'protocols/protocol-5' },
            { label: 'Prot. 6 — Audit Integrity', slug: 'protocols/protocol-6' },
            { label: 'Prot. 7 — Isolation', slug: 'protocols/protocol-7' },
          ],
        },
      ],
      components: {
        PageFrame: './src/components/PageFrame.astro',
        SocialIcons: './src/components/SocialIcons.astro',
        ThemeSelect: './src/components/ThemeSelect.astro',
        // Footer removed — now rendered directly by PageFrame
      },
      customCss: ['./src/styles/custom.css'],
      lastUpdated: false,
      pagination: true,
    }),
  ],
});
