---
source_path: "documentation/AVFoundation/avassetwriterinput/metadatareceiver/appendimmediately.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avassetwriterinput/metadatareceiver/appendimmediately"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:appendimmediately:0000:0001">appendImmediately(_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:appendimmediately:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:appendimmediately:0002:0001">입력이 추가 미디어 데이터를 받을 준비가 되어 있을 때 시간 메타데이터 그룹을 동기적으로 추가합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:appendimmediately:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:appendimmediately:0004:0001">iOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:appendimmediately:0004:0002">iPadOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:appendimmediately:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:appendimmediately:0004:0004">macOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:appendimmediately:0004:0005">tvOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:appendimmediately:0004:0006">visionOS 26.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func appendImmediately(_ timedMetadataGroup: AVTimedMetadataGroup) throws -> Bool
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">추가가 성공하면 true를 반환하며, 입력이 추가 미디어 데이터에 대해 준비되지 않았으면 false를 반환합니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0010:0001">**Note**: 기본 writer가 실패하면 오류가 발생합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0011:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0001"><code>timedMetadataGroup</code>: 추가할 timed metadata 그룹입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0013:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avassetwriterinput/metadatareceiver/append(_:">func append(AVTimedMetadataGroup) async throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">입력이 추가 미디어 데이터를 받을 준비가 될 때까지 일시 중단한 다음, timed metadata 그룹을 추가합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avassetwriterinput/metadatareceiver/finish.md">func finish()</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">이 receiver에 더 이상 버퍼가 추가되지 않음을 AVAssetWriter에 알립니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avassetwriterinput/metadatareceiver/appendimmediately(_:">View on Apple Developer</a>)*</span>
