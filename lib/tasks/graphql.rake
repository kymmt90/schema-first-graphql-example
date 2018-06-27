namespace :graphql do
  namespace :schema do
    desc 'Dump GraphQL schema as a JavaScript file'
    task dump_as_js: :environment do
      schema = SchemaFirstGraphqlExampleSchema.to_definition
      File.open(Rails.root.join('mock_app', 'type_defs.js'), 'w') do |f|
        f.puts("module.exports = `\n")
        f.puts(schema)
        f.puts('`')
      end
    end
  end
end
