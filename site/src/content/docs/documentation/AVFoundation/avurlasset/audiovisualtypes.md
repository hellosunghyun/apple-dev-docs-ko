---
source_path: "documentation/AVFoundation/avurlasset/audiovisualtypes.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avurlasset/audiovisualtypes"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:audiovisualtypes:0000:0001">audiovisualTypes()</span>

<span class="ko-segment" data-segment-id="seg:paragraph:audiovisualtypes:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:audiovisualtypes:0002:0001">자산이 지원하는 파일 타입 배열을 반환합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:audiovisualtypes:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:audiovisualtypes:0004:0001">iOS 5.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:audiovisualtypes:0004:0002">iPadOS 5.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:audiovisualtypes:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:audiovisualtypes:0004:0004">macOS 10.7+</span>
- <span class="ko-segment" data-segment-id="seg:list:audiovisualtypes:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:audiovisualtypes:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:audiovisualtypes:0004:0007">watchOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class func audiovisualTypes() -> [AVFileType]
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">지원되는 파일 타입 배열입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001">[class func audiovisualMIMETypes() -&gt; [String]](avurlasset/audiovisualmimetypes.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">자산이 지원하는 MIME 타입 배열을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avurlasset/isplayableextendedmimetype(_:">class func isPlayableExtendedMIMEType(String) -&gt; Bool</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">지정한 코덱과 컨테이너 형식을 사용해 자산을 재생할 수 있는지 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001">[class var audiovisualContentTypes: [UTType]](avurlasset/audiovisualcontenttypes.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">AVURLAsset 클래스가 이해하는 콘텐츠 유형을 제공합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avurlasset/audiovisualtypes(">View on Apple Developer</a>)*</span>
