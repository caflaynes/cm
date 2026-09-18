# Repository Workflow

- `main` is the production branch. Treat changes pushed to `main` as releases.
- Use `dev` for normal development work.
- Batch related changes together. Avoid temporary, test-only, or one-file-at-a-time commits.
- Minimize Vercel deployments. Verify changes before release and do not use production deployments as the normal testing loop.
- Merge `dev` into `main` only when the user explicitly approves a deployment or release.
- Keep changes focused and preserve existing working behavior unless the task requires otherwise.
- Before editing an existing remote file, read its latest repository version so newer changes are not overwritten.
- For urgent production hotfixes, a direct `main` change is allowed only when the user explicitly approves the hotfix.
