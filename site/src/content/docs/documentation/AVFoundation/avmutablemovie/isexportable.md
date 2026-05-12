---
source_path: "documentation/AVFoundation/avmutablemovie/isexportable.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avmutablemovie/isexportable"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:isexportable:0000:0001">isExportable</span>

<span class="ko-segment" data-segment-id="seg:paragraph:isexportable:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:isexportable:0002:0001">이 에셋을 export session으로 내보낼 수 있는지 나타내는 불리언 값입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:isexportable:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:isexportable:0004:0001">iOS 4.3+</span>
- <span class="ko-segment" data-segment-id="seg:list:isexportable:0004:0002">iPadOS 4.3+</span>
- <span class="ko-segment" data-segment-id="seg:list:isexportable:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:isexportable:0004:0004">macOS 10.7+</span>
- <span class="ko-segment" data-segment-id="seg:list:isexportable:0004:0005">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var isExportable: Bool { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 속성 값은 <a href="avassetexportsession.md">@@TOKEN_0@@</a>를 사용해 composition을 내보낼 수 있는 경우 <a href="https://developer.apple.com/documentation/Swift/true">@@TOKEN_1@@</a>입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avmutablemovie/isplayable.md">var isPlayable: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">에셋에 재생 가능한 콘텐츠가 있는지 나타내는 불리언 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avmutablemovie/isreadable.md">var isReadable: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">에셋 리더를 사용해 에셋의 미디어 데이터를 추출할 수 있는지 나타내는 불리언 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avmutablemovie/iscomposable.md">var isComposable: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">에셋을 구성 트랙의 세그먼트로 사용할 수 있는지 나타내는 불리언 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avmutablemovie/iscompatiblewithairplayvideo.md">var isCompatibleWithAirPlayVideo: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">이 에셋이 AirPlay Video와 호환되는지 나타내는 불리언 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avmutablemovie/iscompatiblewithsavedphotosalbum.md">var isCompatibleWithSavedPhotosAlbum: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">이 에셋을 Saved Photos 앨범에 작성할 수 있는지 나타내는 불리언 값입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avmutablemovie/isexportable">View on Apple Developer</a>*</span>
