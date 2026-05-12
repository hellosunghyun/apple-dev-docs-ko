---
source_path: "documentation/AVFoundation/avcapturemoviefileoutput/setoutputsettings-for.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturemoviefileoutput/setoutputsettings-for"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:setoutputsettingsfor:0000:0001">setOutputSettings(_:for:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:setoutputsettingsfor:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:setoutputsettingsfor:0002:0001">지정된 연결에서 녹화 중 미디어 인코딩에 사용하는 출력 옵션을 설정합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:setoutputsettingsfor:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:setoutputsettingsfor:0004:0001">iOS 10.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:setoutputsettingsfor:0004:0002">iPadOS 10.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:setoutputsettingsfor:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:setoutputsettingsfor:0004:0004">macOS 10.7+</span>
- <span class="ko-segment" data-segment-id="seg:list:setoutputsettingsfor:0004:0005">tvOS 17.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func setOutputSettings(_ outputSettings: [String : Any]?, for connection: AVCaptureConnection)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">For details on output settings, see <a href="video-settings.md">@@TOKEN_0@@</a> for video connections and <a href="audio-settings.md">@@TOKEN_1@@</a> for audio connections.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">On iOS, your output settings dictionary may only contain keys listed returned from the <a href="avcapturemoviefileoutput/supportedoutputsettingskeys(for:">@@TOKEN_0@@</a>.md) method.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0002">If you specify any other key, the system throws an invalid argument exception.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0003">Additionally, the value you specify for <a href="avvideocodeckey.md">@@TOKEN_0@@</a> should be present in the <a href="avcapturemoviefileoutput/availablevideocodectypes.md">@@TOKEN_1@@</a> array.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0004"><a href="avvideocompressionpropertieskey.md">@@TOKEN_0@@</a>를 지정하는 경우 <a href="avvideocodeckey.md">@@TOKEN_1@@</a>에 대한 유효한 값도 함께 지정해야 합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">iOS에서 <a href="avcapturemoviefileoutput/outputsettings(for:">@@TOKEN_0@@</a>.md) 메서드는 항상 모든 항목이 채워진 딕셔너리를 제공합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0002"><a href="avcapturemoviefileoutput/outputsettings(for:">@@TOKEN_0@@</a>.md)를 호출해 일부 값만 재정의하려는 경우, <a href="avcapturemoviefileoutput/setoutputsettings(_:for:">@@TOKEN_1@@</a>.md)를 호출하기 전에 지원되지 않는 키를 제외해야 합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0003"><a href="avvideocompressionpropertieskey.md">@@TOKEN_0@@</a> 하위 딕셔너리를 제공할 때는 필요한 항목만 포함된 희소 딕셔너리를 지정할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0004">movie file output 객체는 현재 캡처 세션 구성의 기본값으로 누락된 키를 항상 채웁니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0011:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0001"><code>outputSettings</code>: 출력 설정의 딕셔너리입니다. 파일에 쓰기 전에 연결에서 전달되는 미디어 형식이 변경되지 않도록 하려면 빈 딕셔너리를 전달합니다. 세션 프리셋이 출력 형식을 결정하도록 하려면 <code>nil</code>을 전달합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0002"><code>connection</code>: 인코딩할 미디어를 전달하는 연결입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0013:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001">[func supportedOutputSettingsKeys(for: AVCaptureConnection) -&gt; [String]](avmetadataformat/isouserdata.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">출력 설정 딕셔너리에 사용할 수 있는 지원 키 목록을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001">[func outputSettings(for: AVCaptureConnection) -&gt; [String : Any]](avmetadataformat/quicktimemetadata.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">지정한 연결의 미디어를 인코딩할 때 출력에서 사용하는 설정을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001">[var availableVideoCodecTypes: [AVVideoCodecType]](avmetadataformat/unknown.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">출력이 movie file을 녹화할 때 지원하는 비디오 코덱 유형입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturemoviefileoutput/setoutputsettings(_:for:">View on Apple Developer</a>)*</span>
