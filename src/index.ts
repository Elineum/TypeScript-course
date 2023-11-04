interface IRequest {
  sum: number;
  from: number;
  to: number;
}

interface IResponseSuccess extends IRequest {
  databaseId: number;
}

interface IResponseFail {
  errorMessage: string;
  errorCode: number;
}

interface IResponse {
  status: "success" | "failed";
  data: IResponseSuccess | IResponseFail;
}
