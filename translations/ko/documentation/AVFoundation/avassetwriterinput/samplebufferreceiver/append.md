---
source_path: "documentation/AVFoundation/avassetwriterinput/samplebufferreceiver/append.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avassetwriterinput/samplebufferreceiver/append"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:append:0000:0001">append(_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:append:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:append:0002:0001">입력이 더 많은 미디어 데이터를 받을 준비가 될 때까지 대기한 후 샘플 버퍼를 추가합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:append:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:append:0004:0001">iOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:append:0004:0002">iPadOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:append:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:append:0004:0004">macOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:append:0004:0005">tvOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:append:0004:0006">visionOS 26.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
nonisolated
(nonsending) func append(_ sampleBuffer: CMReadySampleBuffer<CMSampleBuffer.DynamicContent>) async throws
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0008:0001">**Note**: 기본 writer가 실패하면 오류가 발생합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0009:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0001"><code>exposureTargetBias</code>: The exposure target bias. Pass <code>AVCaptureExposureTargetBiasCurrent</code> to leave the <a href="avcaptureautoexposurebracketedstillimagesettings/exposuretargetbias.md">@@TOKEN_2@@</a> unchanged for this image.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avassetwriterinput/samplebufferreceiver/appendimmediately(_:">func appendImmediately(CMReadySampleBuffer&lt;CMSampleBuffer.DynamicContent&gt;) throws -&gt; Bool</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">입력이 더 많은 미디어 데이터에 대해 준비될 때 샘플 버퍼를 동기적으로 추가합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avassetwriterinput/samplebufferreceiver/finish.md">func finish()</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">이 receiver에 더 이상 버퍼를 추가하지 않음을 AVAssetWriter에 표시합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avassetwriterinput/samplebufferreceiver/append(_:">View on Apple Developer</a>)*</span>
