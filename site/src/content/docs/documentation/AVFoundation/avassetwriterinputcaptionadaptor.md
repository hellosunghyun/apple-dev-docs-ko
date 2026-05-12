---
source_path: "documentation/AVFoundation/avassetwriterinputcaptionadaptor.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avassetwriterinputcaptionadaptor"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avassetwriterinputcaptionadaptor:0000:0001">AVAssetWriterInputCaptionAdaptor</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avassetwriterinputcaptionadaptor:0001:0001">**Framework**: AVFoundation **Kind**: class</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avassetwriterinputcaptionadaptor:0002:0001">에셋 라이터 입력에 캡션을 추가하는 객체입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avassetwriterinputcaptionadaptor:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avassetwriterinputcaptionadaptor:0004:0001">iOS 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassetwriterinputcaptionadaptor:0004:0002">iPadOS 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassetwriterinputcaptionadaptor:0004:0003">Mac Catalyst 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassetwriterinputcaptionadaptor:0004:0004">macOS 12.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class AVAssetWriterInputCaptionAdaptor
```

## <span class="ko-segment" data-segment-id="seg:heading:topics:0007:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:creating-a-caption-adaptor:0008:0001">캡션 어댑터 생성</span>

- <span class="ko-segment" data-segment-id="seg:list:creating-a-caption-adaptor:0009:0001"><a href="avassetwriterinputcaptionadaptor/init(assetwriterinput:">init(assetWriterInput: AVAssetWriterInput)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-a-caption-adaptor:0010:0001">지정된 에셋 라이터 입력에 쓰는 새 캡션 어댑터를 생성합니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:accessing-the-writer-input:0011:0001">라이터 입력 액세스</span>

- <span class="ko-segment" data-segment-id="seg:list:accessing-the-writer-input:0012:0001"><a href="avassetwriterinputcaptionadaptor/assetwriterinput.md">var assetWriterInput: AVAssetWriterInput</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:accessing-the-writer-input:0013:0001">연결된 에셋 라이터 입력입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:appending-captions:0014:0001">캡션 추가</span>

- <span class="ko-segment" data-segment-id="seg:list:appending-captions:0015:0001"><a href="avassetwriterinputcaptionadaptor/append(_:">func append(AVCaption) -&gt; Bool</a>-910lp.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:appending-captions:0016:0001">캡션을 라이터 입력에 추가합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:appending-captions:0017:0001"><a href="avassetwriterinputcaptionadaptor/append(_:">func append(AVCaptionGroup) -&gt; Bool</a>-4ils8.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:appending-captions:0018:0001">시스템이 출력에 쓰는 캡션 그룹을 추가합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0019:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:inherits-from:0020:0001">상속</span>

- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0021:0001"><a href="../ObjectiveC/NSObject-swift.class.md">NSObject</a></span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0022:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0023:0001"><a href="../Swift/CVarArg.md">CVarArg</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0023:0002"><a href="../Swift/CustomDebugStringConvertible.md">CustomDebugStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0023:0003"><a href="../Swift/CustomStringConvertible.md">CustomStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0023:0004"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0023:0005"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0023:0006"><a href="../ObjectiveC/NSObjectProtocol.md">NSObjectProtocol</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0024:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0025:0001"><a href="avassetreaderoutputcaptionadaptor.md">class AVAssetReaderOutputCaptionAdaptor</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0026:0001">시간 기반 텍스트가 포함된 에셋 트랙에서 캡션 그룹 객체를 읽는 객체입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0028:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avassetwriterinputcaptionadaptor">View on Apple Developer</a>*</span>
