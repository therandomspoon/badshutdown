import org.apache.commons.io.FilenameUtils;

// ...

String ext1 = FilenameUtils.getExtension("/path/to/file/foo.txt"); // returns "txt"
String ext2 = FilenameUtils.getExtension("bar.exe"); // returns "exe"
