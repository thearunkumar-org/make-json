import {
  ITemplate,
  IInputJSON,
  HTMLElementType,
} from '@thearunkumar/make-html';

export interface ISelections {
  type: string;
  identifier: string;
  display: string;
  styles?: Partial<Record<UsableStylesAttributes, string | number>>;
}

export enum UsableStylesAttributes {
  FONT_FAMILY = 'fontFamily',
  FONT_SIZE = 'fontSize',
  COLOR = 'color',
  BACKGROUND = 'background',
  WIDTH = 'width',
  HEIGHT = 'height',
  TOP = 'top',
  LEFT = 'left',
  BORDER = 'border',
}

export class Builder {
  static convertToJSON(selection: ISelections): ITemplate {
    const template: ITemplate = {
      type: HTMLElementType.DIV,
      children: [],
      styles: <Record<string, string>>selection.styles,
      text: selection.display,
    };
    return template;
  }
  static toJSON(selections: Record<string, ISelections>): IInputJSON {
    const inputJson: IInputJSON = {
      type: 'resume',
      template: {
        type: HTMLElementType.DIV,
        children: [],
        styles: <Record<string, string>>selections['canvas'].styles,
        text: '',
      },
    };
    const children = inputJson.template.children;
    Object.values(selections).forEach((selection: ISelections) => {
      if (selection.type !== 'canvas') {
        children?.push(Builder.convertToJSON(selection));
      }
    });
    return inputJson;
  }
}
