import React, { useState, useEffect } from 'react';
import { Tabs } from '@mantine/core';
import { useRouter } from 'next/router';
import { PropsTablesList } from '../PropsTable';
import { TableOfContents } from '../TableOfContents';
import classes from './DocsTabs.module.css';
import { StylesApiTablesList } from '../StylesApiTable';

interface DocsTabsProps {
  children: React.ReactNode;
  docgen: any;
  stylesApiData?: any;
  componentsProps?: string[];
  componentsStyles?: string[];
  componentPrefix?: string;
}

export function DocsTabs({
  children,
  docgen,
  componentsProps,
  componentsStyles,
  stylesApiData,
  componentPrefix,
}: DocsTabsProps) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('docs');
  const hasProps = Array.isArray(componentsProps);
  const hasStyles = Array.isArray(componentsStyles);

  useEffect(() => {
    setActiveTab(window.location.search.replace('?t=', '') || 'docs');
  }, []);

  return (
    <Tabs
      variant="outline"
      value={activeTab}
      classNames={{ root: classes.root, list: classes.tabsList, tab: classes.tab }}
      keepMounted={false}
      radius="md"
      onChange={(value) => {
        router.replace(value === 'docs' ? router.pathname : `${router.pathname}?t=${value}`);
        setActiveTab(value!);
      }}
    >
      <div className={classes.tabsWrapper}>
        <Tabs.List>
          <Tabs.Tab value="docs">Documentation</Tabs.Tab>
          {hasProps && <Tabs.Tab value="props">Props</Tabs.Tab>}
          {hasStyles && <Tabs.Tab value="styles-api">Styles API</Tabs.Tab>}
        </Tabs.List>
      </div>

      <Tabs.Panel value="docs">
        <div className={classes.tabContent} data-main>
          <div className={classes.main} id="mdx">
            {children}
          </div>

          <div className={classes.tableOfContents}>
            <TableOfContents withTabs />
          </div>
        </div>
      </Tabs.Panel>

      <Tabs.Panel value="props">
        <div className={classes.tabContent} data-secondary>
          <PropsTablesList components={componentsProps!} data={docgen} />
        </div>
      </Tabs.Panel>

      <Tabs.Panel value="styles-api">
        <div className={classes.tabContent} data-secondary>
          {stylesApiData && (
            <StylesApiTablesList
              data={stylesApiData}
              components={componentsStyles!}
              componentPrefix={componentPrefix}
            />
          )}
        </div>
      </Tabs.Panel>
    </Tabs>
  );
}
