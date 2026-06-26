import "bootstrap";
import * as ko from "knockout";

type KoObservable<T> = {
  (): T;
  (value: T): void;
};
type KoComputed<T> = () => T;

const scriptSamples: Record<string, string> = {
  CSharp: 'Console.WriteLine("Hello from C#");',
  Python: 'print("Hello from Python")',
  ClearScript: [
    'context.log("Hello from ClearScript");',
    'console.log({ jobName: context.jobName, language: context.language });',
    '',
    '// Example: const user = items.get("Users", "UserId", 1);',
    '// Example: const rows = items.query("SELECT * FROM Users WHERE LoginId = @LoginId", { LoginId: "admin" });'
  ].join("\n")
};

class JobRunnerViewModel {
  readonly selectedLanguage: KoObservable<string>;
  readonly scriptCode: KoObservable<string>;
  readonly sampleButtonText: KoComputed<string>;

  constructor(root: HTMLElement) {
    const languageSelect = root.querySelector<HTMLSelectElement>("[data-jobrunner-language]");
    const codeTextArea = root.querySelector<HTMLTextAreaElement>("[data-jobrunner-code]");

    this.selectedLanguage = ko.observable(languageSelect?.value || "CSharp");
    this.scriptCode = ko.observable(codeTextArea?.value || scriptSamples.CSharp);
    this.sampleButtonText = ko.pureComputed(() => `Use ${this.selectedLanguage()} sample`);
  }

  useSample = (): void => {
    this.scriptCode(scriptSamples[this.selectedLanguage()] ?? scriptSamples.CSharp);
  };
}

function applyJobRunnerBindings(): void {
  const root = document.querySelector<HTMLElement>("[data-jobrunner-app]");
  if (!root) {
    return;
  }

  ko.applyBindings(new JobRunnerViewModel(root), root);
}

document.addEventListener("DOMContentLoaded", applyJobRunnerBindings);
