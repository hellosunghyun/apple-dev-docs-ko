---
source_path: "documentation/AVFoundation/avcapturefileoutput/resumerecording.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturefileoutput/resumerecording"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:resumerecording:0000:0001">resumeRecording()</span>

<span class="ko-segment" data-segment-id="seg:paragraph:resumerecording:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:resumerecording:0002:0001">이 메서드는 <a href="avcapturefileoutput/pauserecording(">@@TOKEN_0@@</a>.md)을 사용해 이전에 일시 정지되었던 후 현재 출력 파일에 대한 기록을 재개합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:resumerecording:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:resumerecording:0004:0001">iOS 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:resumerecording:0004:0002">iPadOS 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:resumerecording:0004:0003">Mac Catalyst 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:resumerecording:0004:0004">macOS 10.7+</span>
- <span class="ko-segment" data-segment-id="seg:list:resumerecording:0004:0005">tvOS 18.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func resumeRecording()
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 메서드는 <a href="avcapturefileoutput/pauserecording(">@@TOKEN_0@@</a>.md) 후에 기록이 일시 정지되었던 경우, <a href="avcapturefileoutput/outputfileurl.md">@@TOKEN_1@@</a>가 반환한 현재 출력 파일에 캡처된 샘플 쓰기를 재개하도록 수신자를 설정합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">이를 통해 시간적으로 연속되지 않은 여러 미디어 세그먼트를 하나의 파일에 기록할 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">macOS에서 이 메서드를 <code>captureOutput:didOutputSampleBuffer:fromConnection:</code> 대리자 메서드 내에서 호출하면, 현재 파일에 처음 기록되는 샘플은 해당 메서드에 전달된 샘플 버퍼에 포함된 샘플이 보장됩니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0010:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0001"><a href="avcapturefileoutput/isrecordingpaused.md">var isRecordingPaused: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0012:0001">현재 출력 파일에 대한 기록이 일시 정지되어 있는지 나타냅니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="avcapturefileoutput/startrecording(to:recordingdelegate:">func startRecording(to: URL, recordingDelegate: any AVCaptureFileOutputRecordingDelegate)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">지정한 출력 URL에 미디어 기록을 시작합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="avcapturefileoutput/stoprecording.md">func stopRecording()</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">수신자에게 현재 파일에 대한 기록을 중지하라고 지시합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="avcapturefileoutput/pauserecording.md">func pauseRecording()</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">현재 출력 파일에 대한 기록을 일시 정지합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturefileoutput/resumerecording(">Apple Developer에서 보기</a>)*</span>
