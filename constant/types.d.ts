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
    te: Te
    mr: Mr
    bn: Bn
    ml: Ml
    gu: Gu
    kn: Kn
    ta: Ta
    or: Or
    as: As
    ks: Ks
    kok: Kok
    mni: Mni
    ne: Ne
    pa: Pa
    sd: Sd
    ur: Ur
    sat: Sat
    mai: Mai
    brx: Brx
    doi: Doi
    sa: Sa
    grt: Grt
    kha: Kha
    lus: Lus
    bo: Bo
    trp: Trp
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
    options: Option2[]
    Range: Range2
}

export interface Option2 {
    prompt: string
    value: string
}

export interface Range2 {
    start: string
    end: string
}

export interface Te {
    Range: Range3
    value?: string
    options?: Option3[]
}

export interface Range3 {
    start: string
    end: string
}

export interface Option3 {
    prompt: string
    value: string
}

export interface Mr {
    Range: Range4
    value?: string
    options?: Option4[]
}

export interface Range4 {
    start: string
    end: string
}

export interface Option4 {
    prompt: string
    value: string
}

export interface Bn {
    Range: Range5
    value?: string
    options?: Option5[]
}

export interface Range5 {
    start: string
    end: string
}

export interface Option5 {
    prompt: string
    value: string
}

export interface Ml {
    Range: Range6
}

export interface Range6 {
    start: string
    end: string
}

export interface Gu {
    Range: Range7
}

export interface Range7 {
    start: string
    end: string
}

export interface Kn {
    value?: string
    options?: Option6[]
    Range: Range8
}

export interface Option6 {
    prompt: string
    value: string
}

export interface Range8 {
    start: string
    end: string
}

export interface Ta {
    Range: Range9
    value?: string
    options?: Option7[]
}

export interface Range9 {
    start: string
    end: string
}

export interface Option7 {
    prompt: string
    value: string
}

export interface Or {
    Range: Range10
    value?: string
    options?: Option8[]
}

export interface Range10 {
    start: string
    end: string
}

export interface Option8 {
    prompt: string
    value: string
}

export interface As {
    Range: Range11
}

export interface Range11 {
    start: string
    end: string
}

export interface Ks {
    Range: Range12
}

export interface Range12 {
    start: string
    end: string
}

export interface Kok {
    Range: Range13
}

export interface Range13 {
    start: string
    end: string
}

export interface Mni {
    Range: Range14
}

export interface Range14 {
    start: string
    end: string
}

export interface Ne {
    Range: Range15
}

export interface Range15 {
    start: string
    end: string
}

export interface Pa {
    Range: Range16
}

export interface Range16 {
    start: string
    end: string
}

export interface Sd {
    Range: Range17
}

export interface Range17 {
    start: string
    end: string
}

export interface Ur {
    Range: Range18
}

export interface Range18 {
    start: string
    end: string
}

export interface Sat {
    Range: Range19
}

export interface Range19 {
    start: string
    end: string
}

export interface Mai {
    Range: Range20
}

export interface Range20 {
    start: string
    end: string
}

export interface Brx {
    Range: Range21
}

export interface Range21 {
    start: string
    end: string
}

export interface Doi {
    Range: Range22
}

export interface Range22 {
    start: string
    end: string
}

export interface Sa {
    Range: Range23
}

export interface Range23 {
    start: string
    end: string
}

export interface Grt {
    Range: Range24
}

export interface Range24 {
    start: string
    end: string
}

export interface Kha {
    Range: Range25
}

export interface Range25 {
    start: string
    end: string
}

export interface Lus {
    Range: Range26
}

export interface Range26 {
    start: string
    end: string
}

export interface Bo {
    Range: Range27
}

export interface Range27 {
    start: string
    end: string
}

export interface Trp {
    Range: Range28
}

export interface Range28 {
    start: string
    end: string
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
