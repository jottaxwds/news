const baseFetchOptions = () => ({
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

const fetchGetOptions = () => ({
  ...baseFetchOptions(),
  method: 'GET',
});

const fetchPostOptions = () => ({
  ...baseFetchOptions(),
  method: 'POST',
});

const fetchPutOptions = () => ({
  ...baseFetchOptions(),
  method: 'PUT',
});

const fetchPatchOptions = () => ({
  ...baseFetchOptions(),
  method: 'PATCH',
});

const fetchGet = async (url) => {
  const response = await fetch(url, fetchGetOptions());
  const responseText = await response.text();
  return responseText;
};

const fetchGetWithJson = async (url) => {
  const response = await fetch(url, fetchGetOptions());
  const responseAsJson = await response.json();
  return responseAsJson;
};

const fetchPut = async (url, body) => {
  const stringifiedBody = JSON.stringify(body);
  const options = {
    ...fetchPutOptions(),
    body: stringifiedBody,
  };
  const response = await fetch(url, options);
  return response;
};

const fetchPost = async (url, body) => {
  const stringifiedBody = JSON.stringify(body);
  const options = {
    ...fetchPostOptions(),
    body: stringifiedBody,
  };
  const response = await fetch(url, options);
  return response;
};

const fetchPostWithJson = async (url, body) => {
  const response = await fetchPost(url, body);
  const responseAsJson = await response.json();
  return responseAsJson;
};

const fetchPatch = async (url, body) => {
  const stringifiedBody = JSON.stringify(body);
  const options = {
    ...fetchPatchOptions(),
    body: stringifiedBody,
  };
  const response = await fetch(url, options);
  return response;
};

export {
  fetchGet,
  fetchGetWithJson,
  fetchPost,
  fetchPostWithJson,
  fetchPut,
  fetchPatch,
};
