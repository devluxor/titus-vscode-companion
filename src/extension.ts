// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	// console.log('Congratulations, your extension "titus-vscode-extension" is now active!');

  const statusBarIcon = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
  statusBarIcon.text = `$(titus-icon)`;
  statusBarIcon.tooltip = "Titus Companion is active and ready!";
  statusBarIcon.show(); // Display the status bar item

  const insertVariable = vscode.commands.registerCommand('titus-companion.insertVariable', () => {
    const editor = vscode.window.activeTextEditor;
    if (editor) {
        const snippetText = ' var(--TITUS-);';
        
        // The `$0` placeholder is where the cursor will be placed after insertion
        const snippet = new vscode.SnippetString(snippetText.replace('-)', '-$0)'));

        // Insert the snippet at the current cursor position
        editor.insertSnippet(snippet);
    }
  });
  
  context.subscriptions.push(statusBarIcon);
	context.subscriptions.push(insertVariable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
