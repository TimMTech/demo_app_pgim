export const originalContentDelete = (sourceLanguages: any) => {
  fetch(
    `https://demo-translation-app.herokuapp.com/api/article/0/${sourceLanguages.value}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        key: `00001/0/${sourceLanguages.value}`,
      }),
    }
  )
    .then((response) => {
      if (!response.ok) console.log("error");
      return response.json();
    })
    .catch((error) => {});
};

export const originalContentSave = (content: any, sourceLanguages: any) => {
  fetch(
    `https://demo-translation-app.herokuapp.com/api/article/0/${sourceLanguages.value}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        key: `00001/0/${sourceLanguages.value}`,
        value: content,
      }),
    }
  )
    .then((response) => {
      if (!response.ok) console.log("error");
      return response.json();
    })

    .catch((error) => {
      console.log(error);
    });
};

export const translatedContentDelete = (activeLanguage: any) => {
  fetch(
    `https://demo-translation-app.herokuapp.com/api/article/1/${activeLanguage}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        key: `00001/1/${activeLanguage}`,
      }),
    }
  )
    .then((response) => {
      if (!response.ok) console.log("error");

      return response.json();
    })
    .catch((error) => {});
};

export const translatedContentSave = (content: any, activeLanguage: any) => {
    fetch(
        `https://demo-translation-app.herokuapp.com/api/article/1/${activeLanguage}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            key: `00001/1/${activeLanguage}`,
            value: content,
          }),
        }
      )
        .then((response) => {
          if (!response.ok) console.log("error");
          return response.json();
        })
        .catch((error) => {
          console.log(error);
        });
}