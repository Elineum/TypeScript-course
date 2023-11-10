interface IRequest {
  sum: number;
  from: number;
  to: number;
}

interface IDataSuccess extends IRequest {
  databaseId: number;
}

interface IDataFail {
  errorMessage: string;
  errorCode: number;
}

interface IResponseSuccess {
  status: "success";
  data: IDataSuccess;
}

interface IResponseFail {
  status: "failed";
  data: IDataFail;
}

type TResponse = IResponseSuccess | IResponseFail;
