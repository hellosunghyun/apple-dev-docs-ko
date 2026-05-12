---
source_path: "documentation/AVFoundation/avassetdownloadconfiguration/primarycontentconfiguration.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avassetdownloadconfiguration/primarycontentconfiguration"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:primarycontentconfiguration:0000:0001">primaryContentConfiguration</span>

<span class="ko-segment" data-segment-id="seg:paragraph:primarycontentconfiguration:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:primarycontentconfiguration:0002:0001">작업이 다운로드하는 기본 콘텐츠의 구성입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:primarycontentconfiguration:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:primarycontentconfiguration:0004:0001">iOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:primarycontentconfiguration:0004:0002">iPadOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:primarycontentconfiguration:0004:0003">Mac Catalyst 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:primarycontentconfiguration:0004:0004">macOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:primarycontentconfiguration:0004:0005">tvOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:primarycontentconfiguration:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:primarycontentconfiguration:0004:0007">watchOS 10.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var primaryContentConfiguration: AVAssetDownloadContentConfiguration { get }
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="avassetdownloadconfiguration/artworkdata.md">var artworkData: Data?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">자산의 아트워크를 나타내는 데이터 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001">[var auxiliaryContentConfigurations: [AVAssetDownloadContentConfiguration]](avassetdownloadconfiguration/auxiliarycontentconfigurations.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">작업이 다운로드하는 보조 콘텐츠의 구성입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avassetdownloadcontentconfiguration.md">class AVAssetDownloadContentConfiguration</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">변형 한정자와 미디어 옵션을 포함하는 구성 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avassetdownloadconfiguration/optimizesauxiliarycontentconfigurations.md">var optimizesAuxiliaryContentConfigurations: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">작업이 보조 콘텐츠 선택을 최적화하는지 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avassetdownloadconfiguration/downloadsinterstitialassets.md">var downloadsInterstitialAssets: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">인덱스 파일에 나열된 인터스티셜 자산을 다운로드합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0002">기본값은 false입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001">[func setInterstitialMediaSelectionCriteria([AVPlayerMediaSelectionCriteria], forMediaCharacteristic: AVMediaCharacteristic)](avassetdownloadconfiguration/setinterstitialmediaselectioncriteria(_:formediacharacteristic:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">이 자산의 인터스티셜에서 미디어 선택을 설정합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avassetdownloadconfiguration/primarycontentconfiguration">View on Apple Developer</a>*</span>
