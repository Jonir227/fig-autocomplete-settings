import gitmojis from "src/data";

const completionSpec: Fig.Spec = {
  name: "git",
  additionalSuggestions: [
    {
      name: "undo most recent commit",
      description: "Git commit shortcut",
      insertValue: "reset --soft HEAD~1",
      type: "shortcut",
    },
    {
      name: "log (pretty print)",
      insertValue:
        "log --graph --abbrev-commit --decorate --format=format:'%C(bold blue)%h%C(reset) - %C(bold green)(%ar)%C(reset) %C(white)%s%C(reset) %C(dim white)- %an%C(reset)%C(bold yellow)%d%C(reset)' --all",
      description: "Pretty print git log",
    },
  ],
  subcommands: [
    {
      name: "commit",
      options: [
        {
          name: "-m",
          args: {
            suggestions: gitmojis.gitmojis.map((gitmoji) => ({
              name: gitmoji.name,
              displayName: gitmoji.description,
              description: gitmoji.description,
              icon: gitmoji.emoji,
              insertValue: `'${gitmoji.code} {cursor}'`,
            })),
          },
        },
      ],
    },
  ],
};

export default completionSpec;
