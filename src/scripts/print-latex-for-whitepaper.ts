import { IKeyInfo } from "../interfaces/IKeyInfo";
import { ANSI } from "../keyboards/layouts/ANSI.js";

function generateLatexKeyBindings(keyboardLayout: IKeyInfo[][], suffixes: string[]) {
    let latex = `\\begin{longtable}{|p{0.3\\textwidth}|p{0.3\\textwidth}|p{0.4\\textwidth}|}\n\\hline\n`;
    latex += `\\textbf{Key Combination} & \\textbf{Context} & \\textbf{Code} \\\\ \\hline\n`;
    latex += `\\endhead\n`;

    // Function to escape special LaTeX characters
    const escapeLatex = (str: string) => {
        return str
            .replace(/\\/g, '\\textbackslash{}')
            .replace(/_/g, '\\_')
            .replace(/\^/g, '\\^{}')
            .replace(/~/g, '\\~{}')
            .replace(/#/g, '\\#')
            .replace(/\$/g, '\\$')
            .replace(/%/g, '\\%')
            .replace(/&/g, '\\&')
            .replace(/\{/g, '\\{')
            .replace(/\}/g, '\\}');
    };

    // Generate combinations for each suffix separately
    for (const suffix of suffixes) {
        const contextName = suffix.substring(1); // Remove the leading dash
        
        // Add section header
        latex += `\\multicolumn{3}{|c|}{\\textbf{${contextName} Bindings}} \\\\ \\hline\n`;

        // Process each row in the keyboard layout
        for (const row of keyboardLayout) {
            for (const key of row) {
                // Skip modifier-only keys and special keys that don't produce output
                const skipKeys = ['Control', 'Alt', 'Meta', 'Shift', 'CapsLock', 'Tab', 'Enter', 'Backspace'];
                if (skipKeys.includes(key.default)) continue;

                // Generate combination for default key
                if (key.default !== key.code) {
                    latex += `${escapeLatex(key.default)} & ${contextName} & \\texttt{${escapeLatex(key.code + suffix)}} \\\\ \\hline\n`;
                }

                // Generate combination for shifted key if it's different
                if (key.withShift !== key.default && key.withShift !== key.code) {
                    latex += `Shift+${escapeLatex(key.withShift)} & ${contextName} & \\texttt{${escapeLatex('Shift+' + key.code + suffix)}} \\\\ \\hline\n`;
                }
            }
        }

        // Add a small space between sections
        if (suffix !== suffixes[suffixes.length - 1]) {
            latex += `\\multicolumn{3}{|c|}{} \\\\ \\hline\n`;
        }
    }

    latex += `\\end{longtable}\n`;
    return latex;
}

// Usage
const suffixes = ['-editor', '-terminal', '-file-tree'];
const latexOutput = generateLatexKeyBindings(ANSI, suffixes);

// Print the output
console.log(latexOutput);