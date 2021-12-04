import React, { ReactNode } from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import Page from "../components/Page";
import KeepAspectRatioImage from "../components/KeepAspectRatioImage";
import icon from "../images/icon.png";

const Abstract = function Abstract() {
  return (
    <div className="mx-auto container max-w-md">
      <div className="w-24 h-24 mr-1 mb-1 float-left overflow-hidden rounded-full">
        <KeepAspectRatioImage src={icon} alt="nyamadan" />
      </div>
      <div className="m-1 font-sans text-sm">
        <p>1986年生まれのプログラマ。</p>
        <p>
          2011年に大学院を修了後Unityを用いたゲーム開発や、Reactを用いたウェブフロントエンド開発に従事。
        </p>
        <p>ウェブフロントエンドや3DCG技術が好き。</p>
        <p>座右の銘はITで人を幸せにする。</p>
      </div>

      <hr className="clear-left" />
    </div>
  );
};

const Section = function Section({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="mx-auto my-4 container max-w-md text-center">
      <h2 className="font-bold">{title}</h2>
      {children}
    </div>
  );
};

const List = function List({ children }: { children?: React.ReactNode }) {
  return <ul className="text-sm font-sans">{children}</ul>;
};

const ListItem = function ListItem({
  children,
}: {
  children?: React.ReactNode;
}) {
  return <li>{children}</li>;
};

const ListItemTitle = function ListItemTitle({
  children,
}: {
  children?: React.ReactNode;
}) {
  return <h3 className="font-bold mt-2 mb-1 truncate">{children}</h3>;
};

const ColList = function ColList({ children }: { children?: React.ReactNode }) {
  return <ul>{children}</ul>;
};

const ColListItem = function ColListItem({
  children,
}: {
  children?: React.ReactNode;
}) {
  return <li className="leading-6">{children}</li>;
};

const RowList = function RowList({ children }: { children?: React.ReactNode }) {
  return <ul className="font-mono flex flex-row justify-center">{children}</ul>;
};

const RowListItem = function RowListItem({
  children,
}: {
  children?: React.ReactNode;
}) {
  return <li className="mx-1">{children}</li>;
};

const RowLinkItem = function RowLinkItem({
  href,
  prefetch,
  children,
}: {
  href: string;
  prefetch?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <RowListItem>
      <Link prefetch={prefetch} href={href}>
        <a target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      </Link>
    </RowListItem>
  );
};

const About = function About(): ReactNode {
  return (
    <Page>
      <Layout>
        <div className="p-4">
          <Abstract />
          <Section title="Resume">
            <List>
              <ListItem>
                <ListItemTitle>
                  2011～ 独立系システムインテグレータ
                </ListItemTitle>
                <ColList>
                  <ColListItem>Javaを用いたECサイト開発</ColListItem>
                </ColList>
              </ListItem>

              <ListItem>
                <ListItemTitle>
                  2012～ スマートフォンゲーム開発会社
                </ListItemTitle>
                <ColList>
                  <ColListItem>
                    自社ゲームエンジンプロジェクトでLuaを用いたゲーム開発
                  </ColListItem>
                  <ColListItem>JavaScriptを用いたWebViewゲーム開発</ColListItem>
                </ColList>
              </ListItem>

              <ListItem>
                <ListItemTitle>2019～ ウェブサービス開発会社</ListItemTitle>
                <ColList>
                  <ColListItem>
                    Unityを用いたスマートフォンアプリ開発
                  </ColListItem>
                  <ColListItem>Reactを用いたウェブサービス開発</ColListItem>
                </ColList>
              </ListItem>
            </List>
          </Section>

          <Section title="Skills">
            <List>
              <ListItem>
                <ListItemTitle>WebFrontend</ListItemTitle>
                <RowList>
                  <RowListItem>TypeScript</RowListItem>
                  <RowListItem>React</RowListItem>
                  <RowListItem>Sass</RowListItem>
                  <RowListItem>WebGL</RowListItem>
                </RowList>
              </ListItem>

              <ListItem>
                <ListItemTitle>Unity</ListItemTitle>
                <RowList>
                  <RowListItem>uGUI</RowListItem>
                  <RowListItem>UnityIAP</RowListItem>
                </RowList>
              </ListItem>
            </List>
          </Section>

          <Section title="Links">
            <RowList>
              <RowLinkItem href="https://twitter.com/nyamadandan">
                Twitter
              </RowLinkItem>
              <RowLinkItem href="https://github.com/nyamadan">
                GitHub
              </RowLinkItem>
              <RowLinkItem href="https://qiita.com/nyamadandan">
                Qiita
              </RowLinkItem>
            </RowList>
          </Section>
        </div>
      </Layout>
    </Page>
  );
};

export default About;
