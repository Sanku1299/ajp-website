// Shared class name helper used across the scaffolded UI.
export function cn(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(' ');
}
