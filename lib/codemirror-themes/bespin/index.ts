/**
 * @name Bespin
 * @author Mozilla / Jan T. Sott
 *
 * CodeMirror template by Jan T. Sott (https://github.com/idleberg/base16-codemirror)
 * Original Base16 color scheme by Chris Kempson (https://github.com/chriskempson/base16)
 */
import { tags as t } from '@lezer/highlight';
import { createTheme } from '@uiw/codemirror-themes';



const bespin = (alpha: number | string) => createTheme({
  theme: 'dark',
  settings: {
    background: `rgba(40, 33, 28, ${alpha})`,
    foreground: '#9d9b97',
    caret: '#797977',
    selection: '#36312e',
    selectionMatch: '#4f382b',
    gutterBackground: '#28211c',
    gutterForeground: '#666666',
    lineHighlight: 'rgba(255, 255, 255, 0.1)',
  },
  styles: [
    { tag: [t.atom, t.number, t.link, t.bool], color: '#9b859d' },
    { tag: t.comment, color: '#937121' },
    { tag: [t.keyword, t.tagName], color: '#cf6a4c' },
    { tag: t.string, color: '#f9ee98' },
    { tag: t.bracket, color: '#9d9b97' },
    { tag: [t.variableName], color: '#5ea6ea' },
    { tag: t.definition(t.variableName), color: '#cf7d34' },
    { tag: [t.function(t.variableName), t.className], color: '#cf7d34' },
    { tag: [t.propertyName, t.attributeName], color: '#54be0d' },
  ],
});

export default bespin;