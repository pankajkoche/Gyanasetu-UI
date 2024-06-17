export const blogData = {
    "title": "Understanding JSON Schema",
    "content": [
      {
        "type": "image",
        "url": "https://blog.ipemgzb.ac.in/wp-content/uploads/2022/05/benefits-of-python-for-Machine-Learning-AI.jpg",
        "caption": "An overview of JSON Schema"
      },
      {
        "type": "introduction",
        "text": "JSON Schema is a powerful tool for validating the structure of JSON data. In this blog post, we will explore its key features and how to use it effectively."
      },
      {
        "type": "explanation",
        "text": "JSON Schema allows you to define the structure of your JSON data, including the types of values, required fields, and more. This helps ensure that your data is consistent and valid."
      },
      {
        "type": "image",
        "url": "https://blog.ipemgzb.ac.in/wp-content/uploads/2022/05/benefits-of-python-for-Machine-Learning-AI.jpg",
        "caption": "Example of a JSON Schema"
      },
      {
        "type": "explanation",
        "text": "Here is an example of a simple JSON Schema that defines a blog post with a title, content, published date, author, and tags."
      },
      {
        "type": "code",
        "language": "json",
        "code": "{\n  \"$schema\": \"http://json-schema.org/draft-07/schema#\",\n  \"title\": \"Blog Post\",\n  \"type\": \"object\",\n  \"properties\": {\n    \"title\": {\n      \"type\": \"string\"\n    },\n    \"content\": {\n      \"type\": \"string\"\n    },\n    \"publishedDate\": {\n      \"type\": \"string\",\n      \"format\": \"date-time\"\n    },\n    \"author\": {\n      \"type\": \"string\"\n    },\n    \"tags\": {\n      \"type\": \"array\",\n      \"items\": {\n        \"type\": \"string\"\n      }\n    }\n  },\n  \"required\": [\"title\", \"content\", \"publishedDate\", \"author\"]\n}"
      },
      {
        "type": "image",
        "url": "https://example.com/image3.jpg",
        "caption": "Validating JSON data with JSON Schema"
      },
      {
        "type": "code",
        "language": "javascript",
        "code": "const Ajv = require('ajv');\nconst ajv = new Ajv();\nconst schema = {\n  \"$schema\": \"http://json-schema.org/draft-07/schema#\",\n  \"title\": \"Blog Post\",\n  \"type\": \"object\",\n  \"properties\": {\n    \"title\": {\n      \"type\": \"string\"\n    },\n    \"content\": {\n      \"type\": \"string\"\n    },\n    \"publishedDate\": {\n      \"type\": \"string\",\n      \"format\": \"date-time\"\n    },\n    \"author\": {\n      \"type\": \"string\"\n    },\n    \"tags\": {\n      \"type\": \"array\",\n      \"items\": {\n        \"type\": \"string\"\n      }\n    }\n  },\n  \"required\": [\"title\", \"content\", \"publishedDate\", \"author\"]\n};\nconst validate = ajv.compile(schema);\nconst data = {\n  \"title\": \"Understanding JSON Schema\",\n  \"content\": \"JSON Schema is a powerful tool for validating the structure of JSON data.\",\n  \"publishedDate\": \"2024-06-16T10:14:00Z\",\n  \"author\": \"John Doe\",\n  \"tags\": [\"JSON\", \"Schema\", \"Validation\"]\n};\nconst valid = validate(data);\nif (!valid) console.log(validate.errors);"
      }
    ]
  };

