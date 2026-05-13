---
source_path: "documentation/AVFoundation/avmetadatakey/id3metadatakeyplaylistdelay.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avmetadatakey/id3metadatakeyplaylistdelay"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:id3metadatakeyplaylistdelay:0000:0001">id3MetadataKeyPlaylistDelay</span>

<span class="ko-segment" data-segment-id="seg:paragraph:id3metadatakeyplaylistdelay:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:id3metadatakeyplaylistdelay:0002:0001">A key that represents the number of milliseconds of silence between every song in a playlist.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:id3metadatakeyplaylistdelay:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:id3metadatakeyplaylistdelay:0004:0001">iOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:id3metadatakeyplaylistdelay:0004:0002">iPadOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:id3metadatakeyplaylistdelay:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:id3metadatakeyplaylistdelay:0004:0004">macOS 10.7+</span>
- <span class="ko-segment" data-segment-id="seg:list:id3metadatakeyplaylistdelay:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:id3metadatakeyplaylistdelay:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:id3metadatakeyplaylistdelay:0004:0007">watchOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
static let id3MetadataKeyPlaylistDelay: AVMetadataKey
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="avmetadatakey/id3metadatakeyalbumsortorder.md">static let id3MetadataKeyAlbumSortOrder: AVMetadataKey</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">A key that represents how to sort the album.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avmetadatakey/id3metadatakeyalbumtitle.md">static let id3MetadataKeyAlbumTitle: AVMetadataKey</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">A key that represents the title of the recording.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avasynchronousvideocompositionrequest/sourceframe(bytrackid:">func inputReceiver(for: AVAssetWriterInput) -&gt; sending AVAssetWriterInput.SampleBufferReceiver</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">A key that represents an image relating to the audio file.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001">[func determineCompatibleFileTypes(completionHandler: ([AVFileType]) -&gt; Void)](avasynchronousvideocompositionrequest/sourcereadonlypixelbuffer(bytrackid:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">에셋 내보내기 세션이 현재 구성에서 작성할 수 있는 출력 파일 형식을 결정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avassetwriter/inputcaptionreceiverrequestingmultipass(for:">class func determineCompatibility(ofExportPreset: String, with: AVAsset, outputFileType: AVFileType?, completionHandler: (Bool) -&gt; Void)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">출력 파일 형식의 컨테이너에서 에셋을 내보낼 수 있는지에 대한 export preset의 호환성을 결정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001">[class func exportPresets(compatibleWith: AVAsset) -&gt; [String]](avassetwriter/inputmetadatareceiver(for:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">에셋에 대해 호환되는 내보내기 프리셋을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avassetwriter/inputmetadatareceiverrequestingmultipass(for:">func inputMetadataReceiverRequestingMultiPass(for: AVAssetWriterInput) -&gt; sending (AVAssetWriterInput.MetadataReceiver, AVAssetWriterInput.MultiPassController)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avassetexportsession/allexportpresets(">View on Apple Developer</a>)*</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="avassetwriter/inputpixelbufferreceiver(for:pixelbufferattributes:">func inputPixelBufferReceiver(for: AVAssetWriterInput, pixelBufferAttributes: CVPixelBufferCreationAttributes?) -&gt; sending AVAssetWriterInput.PixelBufferReceiver</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">입력을 writer에 연결하고 픽셀 버퍼를 작성할 수 있는 입력 수신기를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="avassetwriter/inputreceiverrequestingmultipass(for:">func inputReceiverRequestingMultiPass(for: AVAssetWriterInput) -&gt; sending (AVAssetWriterInput.SampleBufferReceiver, AVAssetWriterInput.MultiPassController)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">입력을 writer에 연결하고 샘플 버퍼를 작성할 수 있는 입력 수신기와 다중 패스 컨트롤러가 포함된 튜플을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="avassetwriter/inputtaggedpixelbuffergroupreceiver(for:pixelbufferattributes:">func inputTaggedPixelBufferGroupReceiver(for: AVAssetWriterInput, pixelBufferAttributes: CVPixelBufferCreationAttributes?) -&gt; sending AVAssetWriterInput.TaggedPixelBufferGroupReceiver</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">입력을 writer에 연결하고 태그된 픽셀 버퍼를 작성할 수 있는 입력 수신기를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="avassetwriter/inputtaggedpixelbuffergroupreceiverrequestingmultipass(for:pixelbufferattributes:">func inputTaggedPixelBufferGroupReceiverRequestingMultiPass(for: AVAssetWriterInput, pixelBufferAttributes: CVPixelBufferCreationAttributes?) -&gt; sending (AVAssetWriterInput.TaggedPixelBufferGroupReceiver, AVAssetWriterInput.MultiPassController)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">입력을 writer에 연결하고 태그된 픽셀 버퍼를 작성할 수 있는 입력 수신기와 관련된 다중 패스 컨트롤러가 포함된 튜플을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="avmetadatakey/id3metadatakeyconductor.md">static let id3MetadataKeyConductor: AVMetadataKey</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avassetwriter/inputpixelbufferreceiverrequestingmultipass(for:pixelbufferattributes:">View on Apple Developer</a>)*</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="avmetadatakey/id3metadatakeycontentgroupdescription.md">static let id3MetadataKeyContentGroupDescription: AVMetadataKey</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">A key that indicates the sound belongs to a larger category of sounds or music.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="avmetadatakey/id3metadatakeycontenttype.md">static let id3MetadataKeyContentType: AVMetadataKey</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">A key that represents the media content type.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="avmetadatakey/id3metadatakeycopyright.md">static let id3MetadataKeyCopyright: AVMetadataKey</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">A key that represents the copyright statement.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avmetadatakey/id3metadatakeyplaylistdelay">View on Apple Developer</a>*</span>
