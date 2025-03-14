import { KBarAnimator, KBarPortal, KBarPositioner, KBarProvider, KBarResults, KBarSearch, useMatches } from "kbar";
import { forwardRef, ReactNode } from "react";

interface CommandBarProps {
    children: ReactNode;
}
export function CommandBar({ children }: CommandBarProps) {

    const actions = [
        {
            id: "about",
            name: "sobre mim",
            shortcut: ["c"],
            keywords: "email",
            perform: () => (window.location.pathname = "about"),
        },
        {
            id: "projects",
            name: "Projetos",
            shortcut: ["p"],
            keywords: "email",
            perform: () => (window.location.pathname = "projects"),
        },
        {
            id: "blog",
            name: "Blog",
            shortcut: ["b"],
            keywords: "writing words",
            perform: () => (window.location.pathname = "blog"),
        },
    ]


  return (
    <KBarProvider actions={actions}>
    <KBarPortal>
      <KBarPositioner>
        <KBarAnimator>
          <KBarSearch  placeholder="Type a command or search…" />
          <RenderResults />
        </KBarAnimator>
      </KBarPositioner>
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
            <div>{item}</div>
          ) : (
            <div
            style={{
                background: active ? "#eee" : "transparent",
              }}
            >
                {item.name}
            </div>
          )
        }
      />
    )
  }
