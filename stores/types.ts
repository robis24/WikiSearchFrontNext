export interface State {
    total: number,
    term: string,
    from: number,
    size: number,
    order: string,
    sort: string,
    filtersOpen: boolean,
    selected: filterOption[],
    config: Config,
    aggregations: IFilterOptions,
    hits: Result[]
}

interface IFilterOptions {
    [key: string]: IFilterOption
}

interface IFilterOption {
    [key: string]: filterOption
}

export interface filterOption {
    key: string,
    value: string,
    label?: string,
    doc_count?: Number,
    from?: Number,
    to?: Number,
    type?: string
}
/**
 *  config settings
 */
export interface Config {
    settings: {
        size?: number,
        'size options'?: string ,
        sort?: string,
        order?: string,
        'sort options'?: string,
        layout?: string,
        calendar?: string,
        template?: string,
        clear?: string,
        facets?: number,
        theme? : string,
        selected?: string,
        info?: string,
        action?: string,
        title: {
            name: string,
            key: number,
            type: string,
            highlight: boolean,
        },
    },
    facetSettings: ISfilterSettings,
    hitSettings: ISResultSettings
}

interface ISfilterSettings {
    [key: string]: filterSetting
}

interface filterSetting {
    key: string,
    value: string,
    label?: string,
    display?: string,
    doc_count?: number,
    max?: number,
    data?: string,
    text?: string,
    query?: string,
    search?: string
}

interface ISResultSettings {
    [key: string]: ResultSetting
}

interface ResultSetting {
    key: number,
    type: string,
    label?: string,
    display?: string,
    template?: string,
    value?: string,
    count?: string
}

/**
 *  Api results
 */

export interface WikiSearchApiResults {
    result: {
        hits: string,
        total: number,
        aggs: IApiFilterOptions
    }
}

interface IApiFilterOptions {
    [key: string]: {
        [key: string]: {
            buckets: filterOption[]
        }
    }
}

export interface Result {
    _source: {
        subject: {
            title: string
        }
    },
    _id: Number
}