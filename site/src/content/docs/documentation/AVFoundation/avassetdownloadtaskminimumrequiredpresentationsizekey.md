---
source_path: "documentation/AVFoundation/avassetdownloadtaskminimumrequiredpresentationsizekey.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avassetdownloadtaskminimumrequiredpresentationsizekey"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avassetdownloadtaskminimumrequiredpresentationsizekey:0000:0001">AVAssetDownloadTaskMinimumRequiredPresentationSizeKey</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avassetdownloadtaskminimumrequiredpresentationsizekey:0001:0001">**Framework**: AVFoundation **Kind**: var</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avassetdownloadtaskminimumrequiredpresentationsizekey:0002:0001">다운로드할 변형의 최소 프레젠테이션 크기를 나타내는 키입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avassetdownloadtaskminimumrequiredpresentationsizekey:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avassetdownloadtaskminimumrequiredpresentationsizekey:0004:0001">iOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassetdownloadtaskminimumrequiredpresentationsizekey:0004:0002">iPadOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassetdownloadtaskminimumrequiredpresentationsizekey:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassetdownloadtaskminimumrequiredpresentationsizekey:0004:0004">macOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassetdownloadtaskminimumrequiredpresentationsizekey:0004:0005">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
let AVAssetDownloadTaskMinimumRequiredPresentationSizeKey: String
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">기본적으로 다운로드 작업은 가장 큰 미디어 프레젠테이션 크기의 variant를 선택합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">특정 크기의 변형을 다운로드하려면 이 키에 대해 <a href="https://developer.apple.com/documentation/CoreFoundation/CGSize">@@TOKEN_0@@</a> 값을 지정합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avassetdownloadtaskminimumrequiredmediabitratekey.md">let AVAssetDownloadTaskMinimumRequiredMediaBitrateKey: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">다운로드할 변형의 최소 비트 전송률을 나타내는 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avassetdownloadtaskmediaselectionkey.md">let AVAssetDownloadTaskMediaSelectionKey: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">다운로드할 미디어 선택 항목을 나타내는 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avassetdownloadtaskmediaselectionprefersmultichannelkey.md">let AVAssetDownloadTaskMediaSelectionPrefersMultichannelKey: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">지원되는 경우 멀티채널 재생을 지원하는 미디어 선택을 작업에서 다운로드하는지 나타내는 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avassetdownloadtaskprefershdrkey.md">let AVAssetDownloadTaskPrefersHDRKey: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">지원되는 경우 SDR 비디오 대신 HDR 비디오를 작업이 다운로드할지 나타내는 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avassetdownloadtaskpreferslosslessaudiokey.md">let AVAssetDownloadTaskPrefersLosslessAudioKey: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">지원되는 경우 작업이 무손실 오디오 형식으로 미디어 선택을 다운로드하는지 나타내는 키입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avassetdownloadtaskminimumrequiredpresentationsizekey">View on Apple Developer</a>*</span>
