import "bootstrap";
import * as ko from "knockout";

const scriptSamples: Record<string, string> = {
  CSharp: 'Console.WriteLine("Hello from C#");',
  Python: 'print("Hello from Python")'
};

class JobRunnerViewModel {
  readonly selectedLanguage: ko.Observable<string>;
  readonly scriptCode: ko.Observable<string>;
  readonly sampleButtonText: ko.Computed<string>;

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
