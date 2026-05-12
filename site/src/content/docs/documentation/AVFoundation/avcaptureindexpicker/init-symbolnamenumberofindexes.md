---
source_path: "documentation/AVFoundation/avcaptureindexpicker/init-symbolnamenumberofindexes.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcaptureindexpicker/init-symbolnamenumberofindexes"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:initsymbolnamenumberofindexes:0000:0001">init(_:symbolName:numberOfIndexes:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initsymbolnamenumberofindexes:0001:0001">**Framework**: AVFoundation **Kind**: init</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initsymbolnamenumberofindexes:0002:0001">지정된 개수의 인덱스에서 값을 선택하도록 컨트롤을 생성합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initsymbolnamenumberofindexes:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:initsymbolnamenumberofindexes:0004:0001">iOS 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initsymbolnamenumberofindexes:0004:0002">iPadOS 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initsymbolnamenumberofindexes:0004:0003">Mac Catalyst 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initsymbolnamenumberofindexes:0004:0004">macOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initsymbolnamenumberofindexes:0004:0005">tvOS 18.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
init(_ localizedTitle: String, symbolName: String, numberOfIndexes: Int)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">컨트롤의 값에 제목이 필요하지 않을 때 이 초기화 메서드로 피커를 만듭니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0009:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0001"><code>localizedTitle</code>: 피커 동작을 설명하는 지역화된 제목입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0002"><code>symbolName</code>: 이 컨트롤을 나타내는 데 사용할 SF Symbols 라이브러리의 심볼 이름입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0003"><code>numberOfIndexes</code>: 선택할 인덱스의 개수입니다. 이 값은 <code>0</code>보다 커야 합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avcontentkeysessiondelegate/contentkeysession(_:didupdatepersistablecontentkey:forcontentkeyidentifier:">init(String, symbolName: String, numberOfIndexes: Int, localizedTitleTransform: (Int) -&gt; String)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">지정된 개수의 인덱스에서 값을 선택하도록 컨트롤을 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001">[init(String, symbolName: String, localizedIndexTitles: [String])](avcontentkeysessiondelegate/contentkeysession(_:shouldretry:reason:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">값 집합에서 인덱스를 선택하는 객체를 생성합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcaptureindexpicker/init(_:symbolname:numberofindexes:">View on Apple Developer</a>)*</span>
