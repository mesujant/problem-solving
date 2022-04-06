import PyPDF2 as p
from gtts import gTTS
import os

def filter_texts():
    print("snippet on progress")


def ret_txt_files(file_name):
    texts = []
    pdf_obj = open(file_name, "rb")
    pdf_reader = p.PdfFileReader(pdf_obj)
   # print(pdf_reader.numPages);
    for pg_no in range(0, pdf_reader.numPages): 
        pg_obj = pdf_reader.getPage(pg_no)
        texts.append((pg_obj.extractText()))
    print(file_name);
    return texts

def audiofy(texts):
    for i, text in enumerate(texts):
        sp = gTTS(text=text, lang='en', slow=False)
        audio_file="audio"+str(i)+".wav"
        sp.save(audio_file)

def join_audio_files():
    print("snippent of progress");

path = os.getcwd()
pdf_files_path = path + "/test/"
pdf_files = os.listdir(pdf_files_path);
texts=ret_txt_files(pdf_files_path + (pdf_files[0]))
audiofy(texts)




#print(help(p));
#print(help(gTTS));


