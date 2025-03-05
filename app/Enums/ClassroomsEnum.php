<?php

namespace App\Enums;

enum ClassroomsEnum: string
{
    // Primary School (6 years)
    case CLASS_1 = 'class_1';
    case CLASS_2 = 'class_2';
    case CLASS_3 = 'class_3';
    case CLASS_4 = 'class_4';
    case CLASS_5 = 'class_5';
    case CLASS_6 = 'class_6';
    
    // Secondary School - First Cycle (5 years)
    case FORM_1 = 'form_1';  // First Form
    case FORM_2 = 'form_2';  // Second Form
    case FORM_3 = 'form_3';  // Third Form
    case FORM_4 = 'form_4';  // Fourth Form
    case FORM_5 = 'form_5';  // Fifth Form (GCE O Level)
    
    // Secondary School - Second Cycle (2 years)
    case LOWER_SIXTH = 'lower_sixth';  // Lower Sixth (GCE AS Level)
    case UPPER_SIXTH = 'upper_sixth';  // Upper Sixth (GCE A Level)
    case SIL = 'sil';
    case CP = 'cp';
    case CE1 = 'ce1';
    case CE2 = 'ce2';
    case CM1 = 'cm1';
    case CM2 = 'cm2';
    
    // Francophone equivalents (for reference in bilingual schools)
    case SIXIEME = 'sixieme';          // Equivalent to FORM_1
    case CINQUIEME = 'cinquieme';      // Equivalent to FORM_2
    case QUATRIEME = 'quatrieme';      // Equivalent to FORM_3
    case TROISIEME = 'troisieme';      // Equivalent to FORM_4
    case SECONDE = 'seconde';          // Equivalent to FORM_5
    case PREMIERE = 'premiere';        // Equivalent to LOWER_SIXTH
    case TERMINALE = 'terminale';      // Equivalent to UPPER_SIXTH
    
    public function label(): string
    {
        return match($this) {
            self::CLASS_1 => 'Class 1',
            self::CLASS_2 => 'Class 2',
            self::CLASS_3 => 'Class 3',
            self::CLASS_4 => 'Class 4',
            self::CLASS_5 => 'Class 5',
            self::CLASS_6 => 'Class 6',
            self::FORM_1 => 'Form 1',
            self::FORM_2 => 'Form 2',
            self::FORM_3 => 'Form 3',
            self::FORM_4 => 'Form 4',
            self::FORM_5 => 'Form 5',
            self::LOWER_SIXTH => 'Lower Sixth',
            self::UPPER_SIXTH => 'Upper Sixth',
            self::SIXIEME => 'Sixième',
            self::CINQUIEME => 'Cinquième',
            self::QUATRIEME => 'Quatrième',
            self::TROISIEME => 'Troisième',
            self::SECONDE => 'Seconde',
            self::PREMIERE => 'Première',
            self::TERMINALE => 'Terminale',
            self::SIL => 'SIL',
            self::CP => 'CP',
            self::CE1 => 'CE1',
            self::CE2 => 'CE2',
            self::CM1 => 'CM1',
            self::CM2 => 'CM2',
        };
    }

    public static function options(): array
    {
        return collect(self::cases())->mapWithKeys(fn (self $enum) => [$enum->value => $enum->label()])->toArray();
    }    
    
    public function getLevel(): string
    {
        return match($this) {
            self::CLASS_1, self::CLASS_2, self::CLASS_3, 
            self::SIL, self::CP, self::CE1, self::CE2, self::CM1, self::CM2,
            self::CLASS_4, self::CLASS_5, self::CLASS_6 => 'Primary',
            
            self::FORM_1, self::FORM_2, self::FORM_3, 
            self::FORM_4, self::FORM_5, 
            self::SIXIEME, self::CINQUIEME, self::QUATRIEME,
            self::TROISIEME, self::SECONDE => 'Secondary First Cycle',
            
            self::LOWER_SIXTH, self::UPPER_SIXTH,
            self::PREMIERE, self::TERMINALE => 'Secondary Second Cycle',
        };
    }
}
