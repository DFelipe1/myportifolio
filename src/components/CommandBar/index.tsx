import { ActionImpl, KBarAnimator, KBarPortal, KBarPositioner, KBarProvider, KBarResults, KBarSearch, useMatches } from "kbar";
import { forwardRef, ReactNode } from "react";
import { styled } from "../../../stitches.config";
import { Box } from "../Box";
import { Article, Code, CopySimple, Envelope, Lightbulb, UserCircle } from "@phosphor-icons/react/dist/ssr";
import { House } from "@phosphor-icons/react";
import { Action, ActionRow, Animator, getResultStyle, GroupName, Kbd, Positioner, Search } from "./style";

interface CommandBarProps {
    children: ReactNode;
}
export function CommandBar({ children }: CommandBarProps) {

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href)
  }

    const actions = [
        {
            id: "copy-link",
            name: "Copiar Link",
            shortcut: ["l"],
            keywords: "copy-link",
            section: 'sugestões',
            perform: copyLink,
            icon: <CopySimple size={20} weight="fill" />
        },
        {
            id: "email",
            name: "Enviar email",
            shortcut: ["e"],
            keywords: "send-email",
            section: 'sugestões',
            perform: () => (window.location.pathname = "contact"),
            icon: <Envelope size={20} weight="fill" />
        },
        {
            id: "view-source",
            name: "Ver Código",
            shortcut: ["s"],
            keywords: "view-source",
            section: 'sugestões',
            perform: () => (window.open('https://github.com/DFelipe1/myportifolio', '_blank')),
            icon: <Code size={20} weight="fill" />
        },
        {
            id: "home",
            name: "Home",
            shortcut: ["h"],
            keywords: "go-home",
            section: 'Navegue',
            perform: () => (window.location.pathname = "/"),
            icon: <House size={20} weight="fill" />
        },
        {
            id: "about",
            name: "Sobre mim",
            shortcut: ["a"],
            keywords: "go-about",
            section: 'Navegue',
            perform: () => (window.location.pathname = "about"),
            icon: <UserCircle size={20} weight="fill" />
        },
        {
            id: "projects",
            name: "Projetos",
            shortcut: ["p"],
            keywords: "go-projects",
            section: 'Navegue',
            perform: () => (window.location.pathname = "projects"),
            icon: <Lightbulb size={20} weight="fill" />
        },
        {
            id: "blog",
            name: "Blog",
            shortcut: ["b"],
            keywords: "go-blog",
            section: 'Navegue',
            perform: () => (window.location.pathname = "blog"),
            icon: <Article size={20} weight="fill" />
        },
    ]


  return (
    <KBarProvider actions={actions}>
    <KBarPortal>
      <Positioner>
        <Animator>
          <Search  placeholder="Type a command or search…" />
          <RenderResults />
        </Animator>
      </Positioner>
    </KBarPortal>

    {children}
    </KBarProvider>
  )
}

function RenderResults() {
  const { results } = useMatches()

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === 'string' ? (
          <GroupName>{item}</GroupName>
        ) : (
          <ResultItem action={item} active={active} />
        )
      }
    />
  )
}

interface ResultItemProps {
  action: string | ActionImpl;
  active: boolean;
}

function ResultItem({ action, active }: ResultItemProps) {

  if (typeof action === 'string') {
    return <GroupName>{action}</GroupName>
  }

  return (
    <Box css={getResultStyle(active)}>
        <Action>
          {action.icon && action.icon}
          <ActionRow>
            <span>{action.name}</span>
          </ActionRow>
        </Action>
        {action.shortcut?.length ? (
          <div aria-hidden>
            {action.shortcut.map(shortcut => (
              <Kbd key={shortcut}>{shortcut}</Kbd>
            ))}
          </div>
        ) : null}
    </Box>
  )
}

