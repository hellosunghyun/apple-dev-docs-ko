---
source_path: "documentation/AppKit/nsdocument/save-tooftypefordelegatedidsavecontextinfo.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/appkit/nsdocument/save-tooftypefordelegatedidsavecontextinfo"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:savetooftypefordelegatedidsavecontextinfo:0000:0001">save(to:ofType:for:delegate:didSave:contextInfo:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:savetooftypefordelegatedidsavecontextinfo:0001:0001">**Framework**: AppKit **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:savetooftypefordelegatedidsavecontextinfo:0002:0001">Saves the contents of the document to a file or file package located by a URL, that is formatted to a specified type, for a particular kind of save operation.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:savetooftypefordelegatedidsavecontextinfo:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:savetooftypefordelegatedidsavecontextinfo:0004:0001">macOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func save(to url: URL, ofType typeName: String, for saveOperation: NSDocument.SaveOperationType, delegate: Any?, didSave didSaveSelector: Selector?, contextInfo: UnsafeMutableRawPointer?)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">When saving is completed, regardless of success or failure, the method sends the message selected by <code>didSaveSelector</code> to the <code>delegate</code>, with the <code>contextInfo</code> as the last argument.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">The method selected by <code>didSaveSelector</code> must have the same signature as:</span>

```objc
- (void)document:(NSDocument *)document didSave:(BOOL)didSaveSuccessfully  contextInfo:(void  *)contextInfo;
```

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">The default implementation of this method invokes <code>[self saveToURL:absoluteURL ofType:typeName forSaveOperation:saveOperation error:&amp;anError]</code> and, if <a href="https://developer.apple.com/documentation/Swift/false">@@TOKEN_1@@</a> is returned, presents the error to the user in a document-modal panel before messaging the delegate.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0011:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0001"><code>url</code>: The location of the file or file package to which the document contents are saved.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0002"><code>typeName</code>: The string that identifies the document type.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0003"><code>saveOperation</code>: The type of save operation.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0004"><code>delegate</code>: The delegate to which the selector message is sent.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0005"><code>didSaveSelector</code>: The selector of the message sent to the delegate.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0006"><code>contextInfo</code>: Object passed with the callback to provide any additional context information.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0013:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="nsdocument/canasynchronouslywrite(to:oftype:for:">func canAsynchronouslyWrite(to: URL, ofType: String, for: NSDocument.SaveOperationType) -&gt; Bool</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">Returns whether the receiver can concurrently write to a file or file package located by a URL, that is formatted for a specific type, for a specific kind of save operation.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="nsdocument/unblockuserinteraction.md">func unblockUserInteraction()</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">Unblocks the main thread during asynchronous saving.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="nsdocument/write(to:oftype:">func write(to: URL, ofType: String) throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">Writes the contents of the document to a file or file package located by a URL, that is formatted to a specified type.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="nsdocument/writesafely(to:oftype:for:">func writeSafely(to: URL, ofType: String, for: NSDocument.SaveOperationType) throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">Writes the contents of the document to a file or file package located by a URL.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="nsdocument/filewrapper(oftype:">func fileWrapper(ofType: String) throws -&gt; FileWrapper</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">Creates and returns a file wrapper that contains the contents of the document, formatted to the specified type.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="nsdocument/data(oftype:">func data(ofType: String) throws -&gt; Data</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">Creates and returns a data object that contains the contents of the document, formatted to a specified type.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="nsdocument/write(to:oftype:for:originalcontentsurl:">func write(to: URL, ofType: String, for: NSDocument.SaveOperationType, originalContentsURL: URL?) throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">Writes the contents of the document to a file or file package located by a URL.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="nsdocument/save(to:oftype:for:completionhandler:">func save(to: URL, ofType: String, for: NSDocument.SaveOperationType, completionHandler: ((any Error)?) -&gt; Void)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">문서의 내용을 URL로 식별된 파일 또는 파일 패키지에 저장합니다. 지정한 유형으로 포맷되고, 지정된 저장 작업 종류에 따라 전달된 completionHandler가 호출됩니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001">[func fileAttributesToWrite(to: URL, ofType: String, for: NSDocument.SaveOperationType, originalContentsURL: URL?) throws -&gt; [String : Any]](nsdocument/fileattributestowrite(to:oftype:for:originalcontentsurl:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">지정된 URL의 파일이나 파일 패키지에 쓰기 위한 속성을 반환하며, 지정된 저장 작업 종류를 대상으로 합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="nsdocument/saveoperationtype.md">NSDocument.SaveOperationType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">수행할 문서 저장 작업 유형을 지정하기 위한 상수입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">*<a href="https://developer.apple.com/documentation/appkit/nsdocument/save(to:oftype:for:delegate:didsave:contextinfo:">View on Apple Developer</a>)*</span>
