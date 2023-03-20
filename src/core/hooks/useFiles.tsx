import ConfigSwisse from "../api/ConfigSwisse";
import { IFile } from "../interfaces/IFile";
import { SaveFile } from "../services/FileService";

export const useFiles = () => {

    const getFilePath = (data: IFile) => {
        try {
            const path = `${ConfigSwisse.urlapi}/api/File/GetFile/?FileName=${data.fileName}&FileType=${data.fileType}&FolderName=${data.folderName}`
            return path;
        } catch (error) {
            return null;
        } finally {
            // setReload(false);
        }
    };

    const downloadFile = (path: string) => {
        const link:any = document.createElement('a');
        link.href = path;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } 

    const saveFile = async (data: FormData, showAlert: boolean = false) => {
        try {
            const response = await Promise.all([
                SaveFile(data)
            ]);

            showAlert && alert("Salvata con successo.");

            return response;

        } catch (error) {
            console.log(error);
        } finally {
            // setReload(false);
        }
    }

    return {
        getFilePath,
        downloadFile,
        saveFile
    }
}