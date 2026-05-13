---
source_path: "documentation/AdvancedCommerceAPI/setupmanagesubscriptions.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/advancedcommerceapi/setupmanagesubscriptions"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:setting-up-a-link-to-manage-subscriptions:0000:0001">구독 관리 링크 설정</span>

<span class="ko-segment" data-segment-id="seg:paragraph:setting-up-a-link-to-manage-subscriptions:0001:0001">**프레임워크**: Advanced Commerce API</span>

<span class="ko-segment" data-segment-id="seg:paragraph:setting-up-a-link-to-manage-subscriptions:0002:0001">앱의 구독 관리 페이지로 딥 링크를 만듭니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0003:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0004:0001">iOS에서 사용자는 설정 &gt; Apple 계정 &gt; 구독 페이지를 통해 구독 업그레이드, 다운그레이드, 재구독 및 취소를 포함한 구독 관리를 수행합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0004:0002">Advanced Commerce API를 통해 구독을 제공하면 구독 페이지에 “Manage in App” 버튼이 표시됩니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0005:0001">![iOS 세로 방향 화면의 다이어그램.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0005:0002">이 화면은 Apple 계정의 구독에서 구독 관리 페이지를 표시하며, 관련 앱으로 되돌아가는 딥 링크를 사용하는 버튼을 가리키는 주석이 포함된 화면입니다.](https://docs-assets.developer.apple.com/published/ff08444d776659e7c1efbff76c83e98e/subscription-management-app-link%402x.png)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0006:0001">앱에서 구독 관리 페이지를 구현하고 Apple에 제출할 딥 링크 URL을 생성합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0006:0002">그런 다음 설정 &gt; Apple 계정 &gt; 구독 페이지가 “Manage in App” 버튼에 대해 해당 딥 링크를 사용합니다.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:overview:0007:0001">❗ **중요**: 사용 가능한 Advanced Commerce API 앱의 구독 관리 딥 링크 URL을 제출하려면 <a href="https://developer.apple.comhttps://developer.apple.com/in-app-purchase/advanced-commerce-api/">@@TOKEN_0@@</a> 페이지의 Advanced Commerce API Access 양식을 사용합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0001">다음 지침에 따라 딥 링크를 만듭니다:</span>

- <span class="ko-segment" data-segment-id="seg:list:overview:0009:0001">URL은 유니버설 링크 지침을 따릅니다. 자세한 내용은 <a href="https://developer.apple.com/documentation/Xcode/allowing-apps-and-websites-to-link-to-your-content">@@TOKEN_0@@</a>을 참조합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:overview:0009:0002">딥 링크가 앱의 페이지에서 구독 상태 정보를 제공하고 요금제 변경 또는 재구독 등 고객이 구독을 관리할 수 있는 옵션을 제공해야 합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:overview:0009:0003">선택적으로 스토어프런트별로 고유한 구독 관리 딥 링크 URL을 제공합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0010:0001">참고</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0001"><a href="setting-up-your-project-for-advanced-commerce.md">Setting up your project for Advanced Commerce API</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0012:0001">App Store Connect에서 앱을 구성하고 서버를 설정한 후 SKU를 준비합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="changelog.md">Advanced Commerce API changelog</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">Advanced Commerce API의 새로운 기능과 업데이트를 확인합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">*<a href="https://developer.apple.com/documentation/advancedcommerceapi/setupmanagesubscriptions">View on Apple Developer</a>*</span>
