export interface DynamicFormValidators {
  min?: number;
  max?: number;
  required?: boolean;
  requiredTrue?: boolean;
  email?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  nullValidator?: boolean;
}

export interface DynamicFormControlOptions {
  min?: string;
  max?: string;
  step?: string;
  icon?: string;
}

export interface DynamicFormControls {
  name: string;
  label: string;
  value: string;
  type: string;
  options?: DynamicFormControlOptions;
  validators: DynamicFormValidators;
}

export interface DynamicFormData {
  controls: DynamicFormControls[];
}