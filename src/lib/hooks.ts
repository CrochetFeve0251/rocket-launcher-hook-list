import { loadYamlFile } from 'load-yaml-file'


export default async function getHooks() {
    return await loadYamlFile('hooks-output.yml');
}
