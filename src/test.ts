import { ISelections, Builder } from '.';

const input: Record<string, ISelections> = {
  canvas: {
    display: '',
    identifier: 'canvas',
    type: 'canvas',
    styles: { border: '1px solid GREY', background: '#ffffff' },
  },
  title_1: {
    type: 'title',
    identifier: 'title_1',
    display: 'Arunkumar Srisailapathi',
    styles: { left: 70, top: 0 },
  },
  'sub-title_1': {
    type: 'sub-title',
    identifier: 'sub-title_1',
    display: 'Experience',
    styles: { left: 19, top: 111, background: '#cccccc', width: '34rem' },
  },
  paragraph_1: {
    type: 'paragraph',
    identifier: 'paragraph_1',
    display: '2018 - Present',
    styles: { left: 19, top: 163 },
  },
  paragraph_2: {
    type: 'paragraph',
    identifier: 'paragraph_2',
    display: 'Amazon - PrimeVideo',
    styles: { left: 205, top: 163, color: '#194d33' },
  },
};

console.log(Builder.toJSON(input));
