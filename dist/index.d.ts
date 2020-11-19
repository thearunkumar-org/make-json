import { ITemplate, IInputJSON } from '@thearunkumar/make-html';
export interface ISelections {
    type: string;
    identifier: string;
    display: string;
    styles?: Partial<Record<UsableStylesAttributes, string | number>>;
}
export declare enum UsableStylesAttributes {
    FONT_FAMILY = "fontFamily",
    FONT_SIZE = "fontSize",
    COLOR = "color",
    BACKGROUND = "background",
    WIDTH = "width",
    HEIGHT = "height",
    TOP = "top",
    LEFT = "left",
    BORDER = "border"
}
export declare class Builder {
    static convertToJSON(selection: ISelections): ITemplate;
    static toJSON(selections: Record<string, ISelections>): IInputJSON;
}
