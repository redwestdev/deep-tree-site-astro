// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://redwestdev.github.io',
  base: '/deep-tree-site-astro',
  integrations: [
    starlight({
      title: 'Deep Tree',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/redwestdev/deep-tree',
        },
      ],
      components: {
        Sidebar: './src/components/CustomSidebar/CustomSidebar.astro',
      },
      sidebar: [
        {
          label: 'React',
          items: [
            { label: 'Overview', slug: 'react' },
            { label: 'Installation', slug: 'react/getting-started' },
            {
              label: 'Entities',
              items: [
                { label: 'Introduction', slug: 'react/entities' },
                { label: 'Pages', slug: 'react/pages' },
                { label: 'Sections', slug: 'react/sections' },
                { label: 'Components', slug: 'react/components' },
                { label: 'Project Structure', slug: 'react/project-structure' },
              ],
            },
            {
              label: 'Layers',
              items: [
                { label: 'Layers', slug: 'react/layers' },
                { label: 'File Layers', slug: 'react/file-layers' },
                { label: 'Groups', slug: 'react/groups' },
              ],
            },
            {
              label: 'Architecture',
              items: [
                { label: 'Sharing', slug: 'react/sharing' },
                { label: 'Nesting Depth', slug: 'react/nesting' },
                { label: 'Manager', slug: 'react/manager' },
              ],
            },
            {
              label: 'Utilities',
              items: [
                {
                  label: 'createSafeContext',
                  slug: 'react/create-safe-context',
                },
                { label: 'createManager', slug: 'react/create-manager' },
                { label: 'Data Types', slug: 'react/data-types' },
              ],
            },
          ],
        },
        {
          label: 'Vue',
          badge: { text: 'Coming Soon', variant: 'caution' },
          items: [{ label: 'Overview', slug: 'vue' }],
        },
      ],
    }),
    react(),
  ],
});
