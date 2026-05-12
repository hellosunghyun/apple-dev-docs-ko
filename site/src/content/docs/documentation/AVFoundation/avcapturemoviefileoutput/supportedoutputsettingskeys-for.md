---
source_path: "documentation/AVFoundation/avcapturemoviefileoutput/supportedoutputsettingskeys-for.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturemoviefileoutput/supportedoutputsettingskeys-for"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:supportedoutputsettingskeysfor:0000:0001">supportedOutputSettingsKeys(for:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:supportedoutputsettingskeysfor:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:supportedoutputsettingskeysfor:0002:0001">출력 설정 딕셔너리에 사용할 수 있는 지원 키 목록을 반환합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:supportedoutputsettingskeysfor:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:supportedoutputsettingskeysfor:0004:0001">iOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:supportedoutputsettingskeysfor:0004:0002">iPadOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:supportedoutputsettingskeysfor:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:supportedoutputsettingskeysfor:0004:0004">tvOS 17.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func supportedOutputSettingsKeys(for connection: AVCaptureConnection) -> [String]
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001"><a href="avcapturemoviefileoutput/setoutputsettings(_:for:">@@TOKEN_0@@</a>.md) 메서드에서 설정할 수 있는 키의 배열입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0009:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0001"><code>connection</code>: 미디어를 인코딩할 연결입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001">[func outputSettings(for: AVCaptureConnection) -&gt; [String : Any]](avmediacharacteristic/legible.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">지정된 연결에서 미디어를 인코딩할 때 출력에서 사용하는 설정을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001">[func setOutputSettings([String : Any]?, for: AVCaptureConnection)](avfiletype/ac3.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">지정한 연결에서 녹화 중 미디어를 인코딩할 때 출력에서 사용하는 옵션을 설정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001">[var availableVideoCodecTypes: [AVVideoCodecType]](avfiletype/aifc.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">출력이 영화 파일 녹화를 지원할 때 사용할 수 있는 비디오 코덱 유형입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturemoviefileoutput/supportedoutputsettingskeys(for:">View on Apple Developer</a>)*</span>
