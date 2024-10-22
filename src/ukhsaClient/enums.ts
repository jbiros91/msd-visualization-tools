/**
 * Enums are NOT exhaustive.
 */
export const Theme = {
    INFECTION_DISEASE: 'infectious_disease'
}

export const SubTheme = {
    BLOODSTREAM_INFECTION: 'bloodstream_infection',
    GASTROINTESTINAL: 'gastrointestinal',
    RESPIRATORY: 'respiratory',
    VACCINE_PREVENTABLE: 'vaccine_preventable',
}

export const RespiratoryTopic = {
    ADENOVIRUS: 'Adenovirus',
    COVID_19: 'COVID-19',
    RHINOVIRUS: 'Rhinovirus'
}

export const GeographyType = {
    NATION: 'Nation',
    UKHSA_REGION: 'UKHSA Region',
    GOVERNMENT_OFFICE_REGION: 'Government Office Region\''
}

export const NationGeographyType = {
    ENGLAND: 'England'
}

export const Metric = {
    // cases metrics
    COVID_19_CASES_CASES_BY_DAY: 'COVID-19_cases_casesByDay',
    COVID_19_CASES_COUNT_ROLLING_MEAN: 'COVID-19_cases_countRollingMean',
    COVID_19_CASES_LINEAGE_PERCENT_BY_WEEK: 'COVID-19_cases_lineagePercentByWeek',
    COVID_19_CASES_RATE_ROLLING_MEAN: 'COVID-19_cases_rateRollingMean',

    // death metrics
    COVID_19_DEATHS_ONS_BY_DAY: 'COVID-19_deaths_ONSByDay',
    COVID_19_DEATHS_ONS_REG_BY_WEEK: 'COVID-19_deaths_ONSRegByWeek',
    COVID_19_DEATHS_ONS_ROLLING_MEAN: 'COVID-19_deaths_ONSRollingMean',

    // healthcare metrics
    COVID_19_HEALTHCARE_ADMISSION_ROLLING_MEAN: 'COVID-19_healthcare_admissionRollingMean',
    COVID_19_HEALTHCARE_ADMISSION_BY_DAY: 'COVID-19_healthcare_admissionByDay',
    COVID_19_HEALTHCARE_OCCUPIED_BEDS_BY_DAY: 'COVID-19_healthcare_occupiedBedsByDay',
    COVID_19_HEALTHCARE_OCCUPIED_BEDS_ROLLING_MEAN: 'COVID-19_healthcare_occupiedBedsRollingMean',
    COVID_19_TESTING_POSITIVITY7_DAY_ROLLING: 'COVID-19_testing_positivity7DayRolling',
    COVID_19_TESTING_PCR_COUNT_BY_DAY: 'COVID-19_testing_PCRcountByDay',
}

