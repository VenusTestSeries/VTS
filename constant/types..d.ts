

export interface Root {
    success: boolean
    data: Data
    curTime: string
}

export interface Data {
    _id: string
    course: string
    courseid: string
    title: string
    sectionTimeSharedFlag: boolean
    isSectionalSubmit: boolean
    duration: number
    sections: Section[]
    examCutOffs: ExamCutOffs
    specificExams: SpecificExam[]
    lang: string
    testInterface: string
    showCalculator: boolean
    showNormalCalculator: boolean
    ContainMAMCQ: boolean
    servesOn: string
    isLive: boolean
    isInClass: boolean
    editorNote: string
    target: Target[]
    targetGroup: TargetGroup[]
    targetSuperGroup: TargetSuperGroup[]
    goalIds: string[]
    categoriseBy: string
    languages: string[]
    analysisAfter: number
    isScholarship: boolean
    isAnalysisGenerated: boolean
    containOptionalSections: boolean
    isPyp: boolean
    accessObject: AccessObject
    isASM: boolean
    asmInstructions: any
    langFilteredSections: any
    isFree: boolean
    createdOn: string
    instructions: Instruction[]
    startTime: string
    endTime: string
    optionalQuesPresent: boolean
    hasSectionalRank: boolean
    calculateMarksDistForPercCutoff: boolean
    patternId: string
    hasSkippableSections: boolean
    noOverallAnalysis: boolean
    IsFullTest: boolean
    ExamStage: string
    chooseOptionalSecInTest: boolean
    isSourceCP: boolean
}

export interface Section {
    _id: string
    qCount: number
    title: string
    time: number
    questions: Question[]
    isQualifyingSection: boolean
    instructions: string[]
    SSSNo: number
    SSNo: number
    langFilteredQuestions: any
    containsCompSize: boolean
    compDetails: any
    asmInformationOrdering: boolean
    maxM: number
    hasOptionalQuestions: boolean
    isOptional: boolean
}

export interface Question {
    isNum: boolean
    type: string
    negMarks: number
    posMarks: number
    partialMarks: PartialMarks
    isPartialMarking: boolean
    _id: string
    en: En
    hn: Hn
    lang: string
    singlePageComp: boolean
    isFixedComp: boolean
    comprehensionSizeApp: number
    comprehensionSizeWeb: number
    SSNo: number
    SSSNo: number
    QSNo: number
    isPersonality: boolean
}

export interface PartialMarks {
    type: string
    marks: number
}

export interface En {
    value: string
    options: Option[]
    Range: Range
}

export interface Option {
    prompt: string
    value: string
}

export interface Range {
    start: string
    end: string
}

export interface Hn {
    value: string
    options: Option[]
    Range: Range
}


export interface ExamCutOffs {
    overAll: OverAll
    isSectionalCutOffsAbsent: boolean
    isAdminNotified: boolean
}

export interface OverAll {
    SNo: number
    secId: string
    title: string
    cutOffs: CutOff[]
}

export interface CutOff {
    category: string
    lowerBound: number
    upperBound: number
    lowerBoundPercentile: number
    upperBoundPercentile: number
}

export interface SpecificExam {
    id: string
    title: string
}

export interface Target {
    _id: string
    title: string
    isPrimary: boolean
}

export interface TargetGroup {
    _id: string
    title: string
    isPrimary: boolean
}

export interface TargetSuperGroup {
    _id: string
    title: string
    isPrimary: boolean
}

export interface AccessObject {
    testSeriesIds: TestSeriesId[]
    goalIds: GoalId[]
    access: Access
}

export interface TestSeriesId {
    id: string
    access: string
}

export interface GoalId {
    id: string
}

export interface Access {
    isFree: boolean
}

export interface Instruction {
    value: string
}

