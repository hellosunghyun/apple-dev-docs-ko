---
source_path: "documentation/AVFoundation/avcapturefileoutput/stoprecording.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturefileoutput/stoprecording"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:stoprecording:0000:0001">stopRecording()</span>

<span class="ko-segment" data-segment-id="seg:paragraph:stoprecording:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:stoprecording:0002:0001">현재 파일에 대한 녹화를 중지하도록 수신자에게 지시합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:stoprecording:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:stoprecording:0004:0001">iOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:stoprecording:0004:0002">iPadOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:stoprecording:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:stoprecording:0004:0004">macOS 10.7+</span>
- <span class="ko-segment" data-segment-id="seg:list:stoprecording:0004:0005">tvOS 17.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func stopRecording()
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">현재 파일에 새 샘플 녹화를 중단하고 다른 파일로 계속 녹화하지 않으려는 경우 이 메서드를 호출할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">한 파일에서 다른 파일로 전환하려는 경우에는 이 메서드를 호출하지 않아야 합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0003">대신 새 파일 URL을 사용해 <a href="avcapturefileoutput/startrecording(to:recordingdelegate:">@@TOKEN_0@@</a>.md)만 호출하면 됩니다. 이 메서드를 호출하거나, <a href="avcapturefileoutput/startrecording(to:recordingdelegate:">@@TOKEN_1@@</a>.md)로 파일을 변경했거나 오류가 발생해 중지된 경우, 파일에 포함되어야 하는 남은 데이터가 백그라운드에서 기록됩니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">The value of this property is <a href="https://developer.apple.com/documentation/CoreMedia/CMTime/invalid">@@TOKEN_0@@</a> if the track can’t calculate its minimum frame duration, or if it’s unknown.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0002">따라서 이 파일을 사용하기 전에 <a href="avcapturefileoutput/startrecording(to:recordingdelegate:">@@TOKEN_0@@</a>.md)에서 지정한 델리게이트가 <a href="avcapturefileoutputrecordingdelegate/fileoutput(_:didfinishrecordingto:from:error:">@@TOKEN_1@@</a>.md) 메서드를 통해 파일에 모든 데이터가 기록되었음을 알릴 때까지 기다려야 합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">Use the filtering methods <a href="avmediaselectiongroup.md">@@TOKEN_0@@</a> defines to filter the group’s options according to playability, locale, and additional media characteristics.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avcapturefileoutput/isrecording.md">var isRecording: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">녹화 진행 중 여부를 나타냅니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avcapturefileoutput/startrecording(to:recordingdelegate:">func startRecording(to: URL, recordingDelegate: any AVCaptureFileOutputRecordingDelegate)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">지정한 출력 URL에 미디어 녹화를 시작합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avcapturefileoutput/pauserecording.md">func pauseRecording()</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">현재 출력 파일의 녹화를 일시 중지합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avcapturefileoutput/resumerecording.md">func resumeRecording()</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">이전에 <a href="avcapturefileoutput/pauserecording(">@@TOKEN_0@@</a>.md)을 사용해 일시 중지된 뒤, 현재 출력 파일에 대한 녹화를 다시 시작합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturefileoutput/stoprecording(">View on Apple Developer</a>)*</span>
