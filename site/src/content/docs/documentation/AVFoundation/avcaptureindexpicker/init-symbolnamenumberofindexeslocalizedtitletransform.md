---
source_path: "documentation/AVFoundation/avcaptureindexpicker/init-symbolnamenumberofindexeslocalizedtitletransform.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcaptureindexpicker/init-symbolnamenumberofindexeslocalizedtitletransform"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:initsymbolnamenumberofindexeslocalizedtitletransform:0000:0001">init(_:symbolName:numberOfIndexes:localizedTitleTransform:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initsymbolnamenumberofindexeslocalizedtitletransform:0001:0001">**Framework**: AVFoundation **Kind**: init</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initsymbolnamenumberofindexeslocalizedtitletransform:0002:0001">지정된 인덱스 수에서 값을 선택하는 제어를 생성합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initsymbolnamenumberofindexeslocalizedtitletransform:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:initsymbolnamenumberofindexeslocalizedtitletransform:0004:0001">iOS 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initsymbolnamenumberofindexeslocalizedtitletransform:0004:0002">iPadOS 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initsymbolnamenumberofindexeslocalizedtitletransform:0004:0003">Mac Catalyst 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initsymbolnamenumberofindexeslocalizedtitletransform:0004:0004">macOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initsymbolnamenumberofindexeslocalizedtitletransform:0004:0005">tvOS 18.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
init(_ localizedTitle: String, symbolName: String, numberOfIndexes: Int, localizedTitleTransform: (Int) -> String)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">앱에서 각 값의 제목을 필요 시점에 지연 지정해야 하는 경우에는 이 초기화자를 사용해 피커를 생성합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0009:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0001"><code>localizedTitle</code>: 피커의 동작을 설명하는 지역화된 제목입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0002"><code>symbolName</code>: SF Symbols 라이브러리의 심볼 이름으로, 이 제어를 나타내는 데 사용합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0003"><code>numberOfIndexes</code>: 선택할 인덱스의 수입니다. 이 값은 <code>0</code>보다 커야 합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0004"><code>localizedTitleTransform</code>: 인덱스를 지역화된 제목으로 변환하는 변환입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="averror-swift.struct/airplayreceiverrequiresinternet.md">init(String, symbolName: String, numberOfIndexes: Int)</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">지정된 인덱스 수에서 값을 선택하는 제어를 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001">[init(String, symbolName: String, localizedIndexTitles: [String])](averror-swift.struct/airplayreceivertemporarilyunavailable.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">값 집합에서 인덱스를 선택하는 객체를 생성합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcaptureindexpicker/init(_:symbolname:numberofindexes:localizedtitletransform:">Apple Developer에서 보기</a>)*</span>
