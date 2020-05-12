import fetch from "isomorphic-unfetch"

const B24_LEAD_ADD_HOOK = `${process.env.B24_URL}/crm.lead.add.json`
const B24_LEAD_FIELDS = `${process.env.B24_URL}/crm.lead.fields.json`
const B24_PRODUCT_FIELDS = `${process.env.B24_URL}/crm.product.fields.json`
const B24_PRODUCTS = `${process.env.B24_URL}/crm.product.list.json`
const B24_PRODUCT = `${process.env.B24_URL}/crm.product.get.json`
const B24_FILE_GET = `${process.env.B24_URL}/disk.file.get.json`

const b24SendLead = async (
  title,
  leadName,
  leadPhone,
  leadEmail,
  leadComment,
  leadPathname,
  leadFilename,
  leadFileBase64,
  productTitle,
  productDimensions,
  productLayout,
  productFacadeColor,
  productProfileColor,
  productSum
) => {
  const data = {
    fields: {
      TITLE: title,
      NAME: leadName,
      EMAIL_WORK: leadEmail,
      PHONE: [{ VALUE: leadPhone, VALUE_TYPE: "WORK" }],
      COMMENTS: leadComment,
      STATUS_ID: "NEW",
      SOURCE_ID: "WEB",
      SOURCE_DESCRIPTION: leadPathname
    }
  }

  if (leadName) {
    data.fields.UF_CRM_1585725802 = leadName
  }

  if (leadPhone) {
    data.fields.UF_CRM_1585725802 = leadPhone
  }

  if (leadEmail) {
    data.fields.UF_CRM_1585725802 = leadEmail
  }

  if (leadComment) {
    data.fields.UF_CRM_1585725802 = leadComment
  }

  if (leadPathname) {
    data.fields.UF_CRM_1585725802 = leadPathname
  }

  if (leadFilename && leadFileBase64) {
    data.fields.UF_CRM_1585666709 = { fileData: [leadFilename, leadFileBase64] }
  }

  if (productTitle) {
    data.fields.UF_CRM_1585725802 = productTitle
  }

  if (productDimensions) {
    data.fields.UF_CRM_1585725868 = productDimensions
  }

  if (productLayout) {
    data.fields.UF_CRM_1585725915 = productLayout
  }

  if (productFacadeColor) {
    data.fields.UF_CRM_1585725966 = productFacadeColor
  }

  if (productProfileColor) {
    data.fields.UF_CRM_1585725986 = productProfileColor
  }

  if (productSum) {
    data.fields.OPPORTUNITY = productSum
  }

  console.log(data)

  const res = await fetch(B24_LEAD_ADD_HOOK, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ ...data })
  })

  return res.ok
}

/**
 * Получает список полей конкретного лида
 */
const b24GetFields = async () => {
  const res = await fetch(B24_LEAD_FIELDS, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ id: 35 })
  })

  return await res.json()
}

/**
 * Получает список полей продукта
 */
const b24ProductFields = async () => {
  const res = await fetch(B24_PRODUCT_FIELDS, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
  })

  const { result } = await res.json()
  return result
}


/**
 * Получает список товаров
 * @param {*} select
 * "ID",
 * "NAME" - 
 * "DESCRIPTION" - описание товара
 * "PRICE" - цена на базовый комполект
 * 
 */
const b24GetProducts = async (select) => {
  const res = await fetch(B24_PRODUCTS, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ order: { NAME: "ASC" }, select})
  })

  const { result } = await res.json()
  return result
}

/**
 * Получает товар по ID
 * @param {*} id
 * "ID" - id
 * "NAME" - наименование
 * "DESCRIPTION" - описание товара
 * "PRICE" - цена на базовый комполект
 * "PROPERTY_131" - таблица цен
 * "PROPERTY_135" - таблица дополнений
 * "PROPERTY_137" - скидка в процентах
 * "PROPERTY_139" - акция
 */
const b24GetProduct = async (id) => {
  const res = await fetch(B24_PRODUCT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id })
  })

  const { result } = await res.json()
  return result
}

const b24GetFile = async (id) => {
  const res = await fetch(B24_FILE_GET, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id })
  })

  const { result } = await res.json()
  return result
}

export {
  b24SendLead,
  b24GetFields,
  b24ProductFields,
  b24GetProducts,
  b24GetProduct,
  b24GetFile
}
