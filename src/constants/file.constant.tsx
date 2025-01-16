  
export const EXPORT_TYPE = {
  CSV: 'CSV',
  XLS: 'XLSX',
  PDF: 'PDF',
};

export const ATTACHMENT_FILE_TYPE = {
  PDF: 'pdf',
  XLS: 'xls',
  DOC: 'doc',
  DOCX: 'docx',
  CSV: 'csv',
};

export const FILE_EXTENSIONS_TYPES = {
  PNG: ['.png', '.PNG'],
  JPEG: ['.jpg', '.jpeg', '.JPG', '.JPEG'],
  PDF: ['.pdf'],
  DOC: ['.doc'],
};

export const EXPORT_FILE_TYPE: any = {
  [EXPORT_TYPE?.CSV]: 'text/csv',
  [EXPORT_TYPE?.XLS]:
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  [EXPORT_TYPE?.PDF]: 'application/pdf',
};
  
  
  accept: {
          'image/png': FILE_EXTENSIONS_TYPES?.PNG,
          'image/jpeg': FILE_EXTENSIONS_TYPES?.JPEG,
          'application/pdf': FILE_EXTENSIONS_TYPES?.PDF,
        },