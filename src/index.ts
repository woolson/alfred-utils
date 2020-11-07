/**
 * Base object type for custom data
 */
export interface BaseObject {
  [key: string]: string | boolean | number;
}

/**
 * Paste some data to next workflow
 */
export interface WorkFlowData {
  arg?: string
  config?: BaseObject
  variables?: BaseObject
}

/**
 * Pop dropdown list options
 */
export interface DropListItem {
  title: string,
  arg?: string,
  subtitle?: string,
  /** item can be selected */
  valid?: boolean;
  icon?: {
    type?: 'filetype' | 'fileicon' | string,
    /** relative path to project root */
    path: string,
  },
  /** specific action when the key pressed */
  mods?: {
    cmd?: {
      valid?: boolean,
      arg?: string,
      subtitle?: string,
    },
    ctrl?: {
      valid?: boolean,
      arg?: string,
      subtitle?: string,
    },
    alt?: {
      valid?: boolean,
      arg?: string,
      subtitle?: string,
    },
  },
}

/**
 * Send data to next workflow
 * @param data
 */
export function sendToNext(data: WorkFlowData) {
  console.log(JSON.stringify({ alfredworkflow: data }));
}

/**
 * Post list to show dropdown list
 * @param list List to be shown
 */
export function showDropList(list: DropListItem[]) {
  console.log(JSON.stringify({ items: list }));
};
