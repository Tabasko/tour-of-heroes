export interface GenericFormValidators {
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

export interface GenericFormControlOptions {
  min?: string;
  max?: string;
  step?: string;
  icon?: string;
}

export interface GenericFormControls {
  name: string;
  label: string;
  value: string;
  type: string;
  options?: GenericFormControlOptions;
  validators: GenericFormValidators;
}

export interface GenericFormData {
  controls: GenericFormControls[];
}